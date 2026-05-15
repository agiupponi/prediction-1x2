const Match = require('../models/Match');
const Team = require('../models/Team');
const Odd = require('../models/Odd');
const { sequelize } = require('../config/db');
const AppError = require('../utils/AppError');

exports.getAllMatches = async (req, res, next) => {
    try {
        const { matchday } = req.query;
        const whereClause = {};
        if (matchday) {
            whereClause.matchday = matchday;
        }

        // Include teams
        const matches = await Match.findAll({
            where: whereClause,
            include: [
                { model: Team, as: 'homeTeam' },
                { model: Team, as: 'awayTeam' }
            ],
            order: [['start_date', 'ASC']]
        });
        res.json(matches);
    } catch (error) {
        next(error);
    }
};

exports.createMatch = async (req, res, next) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        next(error);
    }
};

exports.updateMatch = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [updated] = await Match.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedMatch = await Match.findByPk(id);
            return res.json(updatedMatch);
        }
        throw new AppError('Match not found', 404);
    } catch (error) {
        next(error);
    }
};

exports.deleteMatch = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Match.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new AppError('Match not found', 404);
    } catch (error) {
        next(error);
    }
};

// Helper to get distinct matchdays (for frontend efficiency if needed)
exports.getMatchdays = async (req, res, next) => {
    try {
        const matches = await Match.findAll({
            attributes: [[sequelize.fn('DISTINCT', sequelize.col('matchday')), 'matchday']],
            order: [['matchday', 'ASC']]
        });
        const mds = matches.map(m => m.matchday);
        res.json(mds);
    } catch (error) {
        next(error);
    }
}

exports.getUpcomingMatch = async (req, res, next) => {
    try {
        const { Op } = require('sequelize');
        const today = new Date();
        const nextMatch = await Match.findOne({
            where: {
                start_date: {
                    [Op.gte]: today
                }
            },
            order: [['start_date', 'ASC']]
        });

        if (nextMatch) {
            res.json(nextMatch);
        } else {
            // No future matches? Return empty or last match?
            // Let's return filtered result if null
            throw new AppError('No upcoming matches found', 404);
        }
    } catch (error) {
        next(error);
    }
};

// Helper to upsert matches and teams from external API data
const upsertMatchesFromData = async (matches) => {
    const Team = require('../models/Team');
    const Match = require('../models/Match');

    // --- 1. Batch Upsert Teams ---
    const teamMap = new Map(); // name -> data
    matches.forEach(m => {
        teamMap.set(m.homeTeam.name, {
            name: m.homeTeam.name,
            short_name: m.homeTeam.shortName,
            crest_url: m.homeTeam.crest,
            tla: m.homeTeam.tla
        });
        teamMap.set(m.awayTeam.name, {
            name: m.awayTeam.name,
            short_name: m.awayTeam.shortName,
            crest_url: m.awayTeam.crest,
            tla: m.awayTeam.tla
        });
    });

    const uniqueTeams = Array.from(teamMap.values());
    const existingTeams = await Team.findAll();
    const existingTeamMap = new Map(existingTeams.map(t => [t.name, t]));

    const newTeams = uniqueTeams.filter(t => !existingTeamMap.has(t.name));

    if (newTeams.length > 0) {
        await Team.bulkCreate(newTeams);
        const allTeams = await Team.findAll();
        allTeams.forEach(t => existingTeamMap.set(t.name, t));
    }

    // --- 2. Batch Upsert Matches ---
    const matchDataList = matches.map(m => {
        const homeTeamId = existingTeamMap.get(m.homeTeam.name)?.id;
        const awayTeamId = existingTeamMap.get(m.awayTeam.name)?.id;

        if (!homeTeamId || !awayTeamId) return null;

        let winner = null;
        if (m.status === 'FINISHED' && m.score.fullTime.home !== null && m.score.fullTime.away !== null) {
            if (m.score.fullTime.home > m.score.fullTime.away) {
                winner = '1';
            } else if (m.score.fullTime.away > m.score.fullTime.home) {
                winner = '2';
            } else {
                winner = 'X';
            }
        }

        return {
            external_id: m.id,
            matchday: m.matchday,
            start_date: m.utcDate,
            status: m.status,
            home_team_id: homeTeamId,
            away_team_id: awayTeamId,
            score_home: m.score.fullTime.home,
            score_away: m.score.fullTime.away,
            score_halftime_home: m.score.halfTime ? m.score.halfTime.home : null,
            score_halftime_away: m.score.halfTime ? m.score.halfTime.away : null,
            referee: m.referees && m.referees.length > 0 ? m.referees[0].name : null,
            winner: winner
        };
    }).filter(m => m !== null);

    let count = 0;
    const operations = matchDataList.map(async (data) => {
        const [match, created] = await Match.findOrCreate({
            where: {
                start_date: data.start_date,
                home_team_id: data.home_team_id,
                away_team_id: data.away_team_id
            },
            defaults: data
        });

        if (!created) {
            await match.update(data);
        }
        count++;
    });

    await Promise.all(operations);
    return count;
};

exports.importMatches = async (req, res, next) => {
    const axios = require('axios');
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    const apiUrl = process.env.FOOTBALL_DATA_API_URL;
    const leagueCode = 'PL';

    if (!apiKey) {
        return next(new AppError('API Key missing', 500));
    }

    try {
        const url = apiUrl || `https://api.football-data.org/v4/competitions/${leagueCode}/matches`;
        const response = await axios.get(url, {
            headers: { 'X-Auth-Token': apiKey }
        });

        const count = await upsertMatchesFromData(response.data.matches);
        res.json({ message: `Imported/Updated ${count} matches` });
    } catch (error) {
        next(new AppError(`Failed to import matches: ${error.message}`, 500));
    }
};

exports.importMatchday = async (req, res, next) => {
    const { matchday } = req.params;
    const axios = require('axios');
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    const apiUrl = process.env.FOOTBALL_DATA_API_URL;
    const leagueCode = 'PL';

    if (!apiKey) {
        return next(new AppError('API Key missing', 500));
    }

    try {
        const baseUrl = apiUrl || `https://api.football-data.org/v4/competitions/${leagueCode}/matches`;
        const url = `${baseUrl}?matchday=${matchday}`;

        const response = await axios.get(url, {
            headers: { 'X-Auth-Token': apiKey }
        });

        const count = await upsertMatchesFromData(response.data.matches);
        res.json({ message: `Imported/Updated ${count} matches for matchday ${matchday}` });
    } catch (error) {
        next(new AppError(`Failed to import matches for matchday ${matchday}: ${error.message}`, 500));
    }
};


exports.fetchExternalMatch = async (req, res, next) => {
    const { id } = req.params;
    try {
        const match = await Match.findByPk(id);
        if (!match) {
            throw new AppError("Match not found", 404);
        }
        if (!match.external_id) {
            throw new AppError("Match does not have an external ID linked", 400);
        }

        const axios = require('axios');
        const apiKey = process.env.FOOTBALL_DATA_API_KEY;
        if (!apiKey) {
            throw new AppError('API Key missing', 500);
        }

        const url = `https://api.football-data.org/v4/matches/${match.external_id}`;
        const response = await axios.get(url, {
            headers: { 'X-Auth-Token': apiKey }
        });

        const m = response.data;

        // Calculate winner
        let winner = null;
        if (m.status === 'FINISHED' && m.score.fullTime.home !== null && m.score.fullTime.away !== null) {
            if (m.score.fullTime.home > m.score.fullTime.away) {
                winner = '1';
            } else if (m.score.fullTime.away > m.score.fullTime.home) {
                winner = '2';
            } else {
                winner = 'X';
            }
        }

        await match.update({
            start_date: m.utcDate,
            status: m.status,
            score_home: m.score.fullTime.home,
            score_away: m.score.fullTime.away,
            score_halftime_home: m.score.halfTime ? m.score.halfTime.home : null,
            score_halftime_away: m.score.halfTime ? m.score.halfTime.away : null,
            referee: m.referees && m.referees.length > 0 ? m.referees[0].name : null,
            winner: winner
        });

        res.json(match);
    } catch (error) {
        next(error);
    }
};

exports.getMatchOdds = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Verify match start time
        const match = await Match.findByPk(id);
        if (!match) {
            throw new AppError("Match not found", 404);
        }

        if (new Date() < new Date(match.start_date)) {
            throw new AppError("Odds hidden until kickoff", 403);
        }

        const odds = await Odd.findAll({
            where: { id: id } // 'id' in Odd model is mapped to match_id
        });
        res.json(odds);
    } catch (error) {
        next(error);
    }
};
