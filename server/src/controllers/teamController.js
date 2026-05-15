const Team = require('../models/Team');
const AppError = require('../utils/AppError');

exports.getAllTeams = async (req, res, next) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        next(error);
    }
};

exports.createTeam = async (req, res, next) => {
    try {
        // Expecting { name, short_name, crest_url }
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        next(error);
    }
};

exports.updateTeam = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [updated] = await Team.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedTeam = await Team.findByPk(id);
            return res.json(updatedTeam);
        }
        throw new AppError('Team not found', 404);
    } catch (error) {
        next(error);
    }
};

exports.deleteTeam = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Team.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        throw new AppError('Team not found', 404);
    } catch (error) {
        next(error);
    }
};
