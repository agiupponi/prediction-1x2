const Team = require('../models/Team');

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createTeam = async (req, res) => {
    try {
        // Expecting { name, short_name, crest_url }
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating team' });
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Team.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedTeam = await Team.findByPk(id);
            return res.json(updatedTeam);
        }
        throw new Error('Team not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating team' });
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Team.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Team not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting team' });
    }
};
