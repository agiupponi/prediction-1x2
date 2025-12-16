const Prediction = require('../models/Prediction');
const Match = require('../models/Match');
const admin = require('../config/firebase');
const { sequelize } = require('../config/db');

const Standing = require('../models/Standing');

exports.getLeaderboard = async (req, res) => {
    try {
        // Fetch from Database View 'standing'
        const results = await Standing.findAll({
            order: [['rank', 'ASC']]
        });

        // Fetch all users from Firestore to map names
        const usersSnapshot = await admin.firestore().collection('users').get();
        const usersMap = {};
        usersSnapshot.forEach(doc => {
            const data = doc.data();
            usersMap[doc.id] = data.displayName || (data.first_name && data.last_name ? `${data.first_name} ${data.last_name}` : 'Unknown');
        });

        // Map database view results to frontend format
        // View has: rank, user_id, points
        const leaderboard = results
            .map(entry => {
                const uid = entry.user_id;
                // If user not in firestore (deleted?), name is Unknown but we still show them if they are in standing?
                // Previous logic filtered them out. Let's keep filtering or show 'Unknown'.
                // User requirement: "Utilizzala per caricare la classifica". 
                // The view contains user_ids.
                if (!usersMap[uid]) return null;

                return {
                    rank: parseInt(entry.rank), // items from view might be strings
                    user_id: uid,
                    points: entry.points,
                    displayName: usersMap[uid]
                };
            })
            .filter(e => e !== null);

        res.json(leaderboard);
    } catch (error) {
        console.error("Leaderboard error:", error);
        res.status(500).json({ message: "Error fetching leaderboard" });
    }
};

exports.getStats = async (req, res) => {
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
        console.error(error);
        res.status(500).json({ message: 'Error fetching stats' });
    }
};

exports.getPredictions = async (req, res) => {
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
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.upsertPrediction = async (req, res) => {
    try {
        const userId = req.user.uid;
        const { matchId, prediction } = req.body;

        if (!['1', 'X', '2'].includes(prediction)) {
            return res.status(400).json({ message: 'Invalid prediction value' });
        }

        // Check match existence and start time
        const match = await Match.findByPk(matchId);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }

        if (new Date(match.start_date) < new Date()) {
            return res.status(403).json({ message: 'Match has already started' });
        }

        if (['IN_PLAY', 'PAUSED', 'FINISHED'].includes(match.status)) {
            return res.status(403).json({ message: 'Match is already in progress or finished' });
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
        console.error(error);
        res.status(500).json({ message: 'Error saving prediction' });
    }
};
