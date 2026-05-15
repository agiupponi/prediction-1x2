const Prediction = require('../models/Prediction');
const Match = require('../models/Match');
const admin = require('../config/firebase');
const userService = require('../services/userService');
const { sequelize } = require('../config/db');
const AppError = require('../utils/AppError');



exports.getLeaderboard = async (req, res, next) => {
    try {
        const { matchday } = req.query;
        let results;

        if (matchday) {
            // Calculate standings specifically for this matchday
            // Join Predictions -> Matches. 
            // Condition: Match.matchday = ? AND Match.status = 'FINISHED' AND Match.winner = Prediction.prediction
            [results] = await sequelize.query(`
                SELECT user_id, SUM(points) as points 
                FROM standings 
                WHERE matchday = :matchday 
                GROUP BY user_id 
                ORDER BY points DESC
            `, {
                replacements: { matchday }
            });
        } else {
            // Fetch from Database View 'standings' aggregated by user
            [results] = await sequelize.query(`
                SELECT user_id, SUM(points) as points 
                FROM standings 
                GROUP BY user_id 
                ORDER BY points DESC
            `);
        }

        // Fetch all users from optimized in-memory cache to map names
        const usersMap = await userService.getCachedUsersMap();

        // Map database results to frontend format
        let rankCounter = 1;
        const leaderboard = results
            .map(entry => {
                const uid = entry.user_id;
                const userObj = usersMap[uid];

                if (!userObj) return null;

                return {
                    rank: rankCounter++,
                    user_id: uid,
                    points: parseInt(entry.points || 0), // Sum might be string in some drivers
                    displayName: userObj.displayName,
                    photoURL: userObj.photoURL
                };
            })
            .filter(e => e !== null);

        res.json(leaderboard);
    } catch (error) {
        next(error);
    }
};

exports.getOddLeaderboard = async (req, res, next) => {
    try {
        const { matchday } = req.query;
        let results;

        if (matchday) {
            // Calculate odd standings specifically for this matchday
            // Join Predictions -> Matches -> Odds (Left Join Odds to get value? Or just join if assuming odd exists)
            // Need to get the 'odd' value for the winning outcome.
            // Odds table stores (id=match_id, prediction='1'/'X'/'2', odd=value)

            [results] = await sequelize.query(`
                SELECT user_id, SUM(points) as points 
                FROM odd_standings 
                WHERE matchday = :matchday
                GROUP BY user_id 
                ORDER BY points DESC
            `, {
                replacements: { matchday }
            });
        } else {
            // Fetch from Database View 'odd_standings' aggregated by user
            [results] = await sequelize.query(`
                SELECT user_id, SUM(points) as points 
                FROM odd_standings 
                GROUP BY user_id 
                ORDER BY points DESC
            `);
        }

        // Fetch all users from optimized in-memory cache to map names
        const usersMap = await userService.getCachedUsersMap();

        // Map database results to frontend format
        let rankCounter = 1;
        const leaderboard = results
            .map(entry => {
                const uid = entry.user_id;
                const userObj = usersMap[uid];

                if (!userObj) return null;

                return {
                    rank: rankCounter++,
                    user_id: uid,
                    points: parseFloat(entry.points || 0).toFixed(2),
                    displayName: userObj.displayName,
                    photoURL: userObj.photoURL
                };
            })
            .filter(e => e !== null);

        res.json(leaderboard);
    } catch (error) {
        next(error);
    }
};

exports.getHeadToHeadLeaderboard = async (req, res, next) => {
    try {
        const { matchday } = req.query;
        let results;

        if (matchday) {
            [results] = await sequelize.query(`
                SELECT 
                    user_id, 
                    SUM(win) as total_wins, 
                    SUM(draw) as total_draws, 
                    SUM(loss) as total_losses
                FROM one_to_one_standings 
                WHERE matchday = :matchday
                GROUP BY user_id 
            `, {
                replacements: { matchday }
            });
        } else {
            [results] = await sequelize.query(`
                SELECT 
                    user_id, 
                    SUM(win) as total_wins, 
                    SUM(draw) as total_draws, 
                    SUM(loss) as total_losses
                FROM one_to_one_standings 
                GROUP BY user_id 
            `);
        }

        const usersMap = await userService.getCachedUsersMap();

        // Calculate sortable points (Wins then Draws)
        const rankedResults = results.map(r => {
            const wins = parseInt(r.total_wins || 0);
            const draws = parseInt(r.total_draws || 0);
            const losses = parseInt(r.total_losses || 0);
            return {
                ...r,
                wins,
                draws,
                losses,
                displayString: `${wins}-${draws}-${losses}`
            };
        }).sort((a, b) => {
            if (b.wins !== a.wins) {
                return b.wins - a.wins; // Primary: Wins
            }
            return b.draws - a.draws; // Secondary: Draws
        });

        let rankCounter = 1;
        const leaderboard = rankedResults
            .map(entry => {
                const uid = entry.user_id;
                const userObj = usersMap[uid];

                if (!userObj) return null;

                return {
                    rank: rankCounter++,
                    user_id: uid,
                    points: entry.displayString, // Keep for potential fallback
                    win: entry.wins,     // Add specific fields
                    draw: entry.draws,
                    loss: entry.losses,
                    displayName: userObj.displayName,
                    photoURL: userObj.photoURL
                };
            })
            .filter(e => e !== null);

        res.json(leaderboard);
    } catch (error) {
        next(error);
    }
};

exports.getStats = async (req, res, next) => {
    try {
        const userId = req.user.uid;

        // Fetch stats: Total predictions, correct predictions, points (assuming 1 pt per correct)
        // We can do this with Sequelize counts or raw query.
        // Let's use raw query for efficiency or careful Sequelize aggregations.

        // Total Predictions
        const totalPredictions = await Prediction.count({
            where: { user_id: userId }
        });

        // Correct Predictions
        // We need to join with Match to check correctness.
        // Current User Prediction joins Match. Match has 'winner'.
        // If match.winner == prediction.prediction, then correct.

        // Fetch valid finished predictions check
        const { count, rows } = await Prediction.findAndCountAll({
            where: { user_id: userId },
            include: [{
                model: Match,
                where: { status: 'FINISHED' },
                required: true
            }]
        });

        // Calculate correct locally or via DB. 
        // Via DB requires complex where clause referencing joined column (Match.winner = Prediction.prediction)
        // Sequelize: where: sequelize.literal('Match.winner = Prediction.prediction')

        let correctCount = 0;
        rows.forEach(p => {
            if (p.Match && p.Match.winner === p.prediction) {
                correctCount++;
            }
        });

        const points = correctCount * 1; // 1 point per correct answer
        const successRate = count > 0 ? ((correctCount / count) * 100).toFixed(1) : 0;

        res.json({
            total: totalPredictions,
            correct: correctCount,
            points,
            successRate
        });

    } catch (error) {
        next(error);
    }
};

exports.getPredictions = async (req, res, next) => {
    try {
        const { matchId } = req.query;
        const userId = req.user.uid;

        const whereClause = { user_id: userId };
        if (matchId) {
            whereClause.match_id = matchId;
        }

        const predictions = await Prediction.findAll({
            where: whereClause
        });

        // Return map format for easier frontend consumption: { matchId: predictionValue }
        // Or just array. Let's return array for REST compliance, map it in frontend.
        res.json(predictions);
    } catch (error) {
        next(error);
    }
};

exports.upsertPrediction = async (req, res, next) => {
    try {
        const userId = req.user.uid;
        const { matchId, prediction } = req.body;

        if (!['1', 'X', '2'].includes(prediction)) {
            throw new AppError('Invalid prediction value', 400);
        }

        // Check match existence and start time
        const match = await Match.findByPk(matchId);
        if (!match) {
            throw new AppError('Match not found', 404);
        }

        if (new Date(match.start_date) < new Date()) {
            throw new AppError('Match has already started', 403);
        }

        if (['IN_PLAY', 'PAUSED', 'FINISHED'].includes(match.status)) {
            throw new AppError('Match is already in progress or finished', 403);
        }

        // Check existing validation
        const existing = await Prediction.findOne({
            where: { user_id: userId, match_id: matchId }
        });

        if (existing) {
            existing.prediction = prediction;
            await existing.save();
            return res.json(existing);
        } else {
            const newPred = await Prediction.create({
                user_id: userId,
                match_id: matchId, // Ensure casing matches model definition (match_id vs matchId) -> Model uses match_id column but camelCase fields by default? 
                // Sequelize default is camelCase fields mapping to underscored columns if underscored: true.
                // My model defined 'match_id' explicitly? Let's check model.
                // Model: Match.belongsTo... foreignKey: 'match_id'.
                // So field name is match_id (or matchId depending on define).
                // Let's use `match_id` explicitly in create.
                match_id: matchId,
                prediction
            });
            return res.status(201).json(newPred);
        }


    } catch (error) {
        next(error);
    }
};

exports.getAllPredictionsForMatch = async (req, res, next) => {
    try {
        const { matchId } = req.params;

        // Verify match start time
        const match = await Match.findByPk(matchId);
        if (!match) {
            throw new AppError("Match not found", 404);
        }

        // Allow if match is finished or started (assuming start_date is in UTC or comparable format)
        // If today is before start_date, deny access
        if (new Date() < new Date(match.start_date)) {
            throw new AppError("Predictions hidden until kickoff", 403);
        }

        const predictions = await Prediction.findAll({
            where: { match_id: matchId }
        });

        if (!predictions.length) {
            return res.json([]);
        }

        // Fetch user details from Firestore
        const userIds = predictions.map(p => p.user_id);
        // Use a set to avoid duplicate fetches if needed, though findAll likely returns unique per user per match? 
        // Yes, likely one prediction per user per match.

        // Firestore 'in' query supports up to 10 items (or 30? It has limits). 
        // Safer to fetch all users and map, OR fetch individually if list is short.
        // Given we have a user map cache in getLeaderboard, maybe we should reuse a caching strategy or just fetch all for now as user base is small?
        // Let's optimize slightly: fetch all users (assuming small scale) or fetch by chunks.
        // For simplicity and consistency with existing code (getLeaderboard), let's fetch all users. 
        // PRO: Simpler code. CON: Scaling issue. Optimization can come later.

        const usersMap = await userService.getCachedUsersMap();

        const result = predictions.map(p => {
            const userObj = usersMap[p.user_id];
            return {
                user_id: p.user_id,
                prediction: p.prediction,
                displayName: userObj ? userObj.displayName : 'Unknown User',
                photoURL: userObj ? userObj.photoURL : null
            };
        });

        res.json(result);

    } catch (error) {
        next(error);
    }
};
