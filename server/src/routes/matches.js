const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.get('/upcoming', verifyToken, matchController.getUpcomingMatch);
router.get('/matchdays', verifyToken, matchController.getMatchdays);
router.get('/', verifyToken, matchController.getAllMatches);
router.post('/', verifyToken, isAdmin, matchController.createMatch);
router.post('/import', verifyToken, isAdmin, matchController.importMatches); // New Import Route
router.post('/:id/fetch-external', verifyToken, isAdmin, matchController.fetchExternalMatch); // Single Sync
router.put('/:id', verifyToken, isAdmin, matchController.updateMatch);
router.delete('/:id', verifyToken, isAdmin, matchController.deleteMatch);
router.get('/:id/odds', verifyToken, matchController.getMatchOdds);

module.exports = router;
