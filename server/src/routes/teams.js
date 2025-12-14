const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Public or Protected? Typically protected in this app context or just public read
router.get('/', verifyToken, teamController.getAllTeams);
router.post('/', verifyToken, isAdmin, teamController.createTeam);
router.put('/:id', verifyToken, isAdmin, teamController.updateTeam);
router.delete('/:id', verifyToken, isAdmin, teamController.deleteTeam);

module.exports = router;
