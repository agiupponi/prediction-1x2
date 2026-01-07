const Match = require('../models/Match');
const Team = require('../models/Team');
const Odd = require('../models/Odd');
const { sequelize } = require('../config/db');

exports.getAllMatches = async (req, res) => {
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
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating match' });
    }
};

exports.updateMatch = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Match.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedMatch = await Match.findByPk(id);
            return res.json(updatedMatch);
        }
        throw new Error('Match not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating match' });
    }
};

exports.deleteMatch = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Match.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Match not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting match' });
    }
};

// Helper to get distinct matchdays (for frontend efficiency if needed)
exports.getMatchdays = async (req, res) => {
    try {
        const matches = await Match.findAll({
            attributes: [[sequelize.fn('DISTINCT', sequelize.col('matchday')), 'matchday']],
            order: [['matchday', 'ASC']]
        });
        const mds = matches.map(m => m.matchday);
        res.json(mds);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

exports.getUpcomingMatch = async (req, res) => {
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
            res.status(404).json({ message: 'No upcoming matches found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.importMatches = async (req, res) => {
    const axios = require('axios');
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    const apiUrl = process.env.FOOTBALL_DATA_API_URL;
    const leagueCode = 'PL'; // Unused if using direct URL, but handy fallback

    if (!apiKey) {
        return res.status(500).json({ message: 'API Key missing' });
    }

    try {
        const url = apiUrl || `https://api.football-data.org/v4/competitions/${leagueCode}/matches`;
        const response = await axios.get(url, {
            headers: { 'X-Auth-Token': apiKey }
        });

        const matches = response.data.matches;

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

        // Upsert teams (requires unique constraint on 'name' for efficient updateOnDuplicate, 
        // normally we use 'id' but we don't have it yet. 
        // MySQL bulkCreate with updateOnDuplicate works if there's a unique key index.)
        // Assuming 'name' is unique or we rely on just finding existing ones. 
        // Safest approach without creating duplicates if model doesn't enforce unique name:
        // 1. Find all existing teams. 2. Filter new ones. 3. Insert new ones.

        const existingTeams = await Team.findAll();
        const existingTeamMap = new Map(existingTeams.map(t => [t.name, t]));

        const newTeams = uniqueTeams.filter(t => !existingTeamMap.has(t.name));

        if (newTeams.length > 0) {
            await Team.bulkCreate(newTeams);
            // Re-fetch to get IDs of new teams
            const allTeams = await Team.findAll();
            allTeams.forEach(t => existingTeamMap.set(t.name, t));
        }

        // --- 2. Batch Upsert Matches ---
        const matchDataList = matches.map(m => {
            const homeTeamId = existingTeamMap.get(m.homeTeam.name)?.id;
            const awayTeamId = existingTeamMap.get(m.awayTeam.name)?.id;

            if (!homeTeamId || !awayTeamId) return null; // Should not happen

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

        // We identify matches by start_date + home_team + away_team (virtual unique key for this logic)
        // or we check if there's a unique constraint in DB.
        // If no unique constraint, bulkCreate updateOnDuplicate might duplicate rows if PK not provided.
        // Let's try to lookup existing matches first to be safe, or use a composite key if one exists.
        // Since we don't have a stable external ID stored, we rely on logic.

        // Optimization: Fetch all matches for this season/range to memory map?
        // Or simpler: Just iterate and upsert promise.all if bulk is risky without PK.
        // Given < 1000 matches, standard FindOrCreate is "slow" (HTTP overhead) but 
        // purely database-side upsert is fast.

        // Let's use loop with Promise.all for parallelism which is faster than sequential await
        // but safer than bulkCreate without PKs.

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

        res.json({ message: `Imported/Updated ${count} matches` });
    } catch (error) {
        console.error('Import Error:', error.message);
        res.status(500).json({ message: 'Failed to import matches', error: error.message });
    }
};

exports.fetchExternalMatch = async (req, res) => {
    const { id } = req.params;
    try {
        const match = await Match.findByPk(id);
        if (!match) {
            return res.status(404).json({ message: "Match not found" });
        }
        if (!match.external_id) {
            return res.status(400).json({ message: "Match does not have an external ID linked" });
        }

        const axios = require('axios');
        const apiKey = process.env.FOOTBALL_DATA_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ message: 'API Key missing' });
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
        console.error("Fetch External Error:", error);
        res.status(500).json({ message: "Failed to fetch external match data", error: error.message });
    }
};

exports.getMatchOdds = async (req, res) => {
    try {
        const { id } = req.params;

        // Verify match start time
        const match = await Match.findByPk(id);
        if (!match) {
            return res.status(404).json({ message: "Match not found" });
        }

        if (new Date() < new Date(match.start_date)) {
            return res.status(403).json({ message: "Odds hidden until kickoff" });
        }

        const odds = await Odd.findAll({
            where: { id: id } // 'id' in Odd model is mapped to match_id
        });
        res.json(odds);
    } catch (error) {
        console.error("Get Odds Error:", error);
        res.status(500).json({ message: "Failed to fetch odds" });
    }
};
