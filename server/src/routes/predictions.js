const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');
const { verifyToken } = require('../middleware/auth');

router.get('/stats', verifyToken, predictionController.getStats);
router.get('/leaderboard', verifyToken, predictionController.getLeaderboard);
router.get('/odd-leaderboard', verifyToken, predictionController.getOddLeaderboard);
router.get('/head-to-head-leaderboard', verifyToken, predictionController.getHeadToHeadLeaderboard);
router.get('/', verifyToken, predictionController.getPredictions);
router.get('/match/:matchId/all', verifyToken, predictionController.getAllPredictionsForMatch);
router.post('/', verifyToken, predictionController.upsertPrediction);

module.exports = router;
