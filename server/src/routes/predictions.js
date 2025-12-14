const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');
const { verifyToken } = require('../middleware/auth');

router.get('/stats', verifyToken, predictionController.getStats);
router.get('/leaderboard', verifyToken, predictionController.getLeaderboard);
router.get('/', verifyToken, predictionController.getPredictions);
router.post('/', verifyToken, predictionController.upsertPrediction);

module.exports = router;
