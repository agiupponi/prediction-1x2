const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Team = require('./Team');

const Match = sequelize.define('Match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    matchday: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'SCHEDULED'
    },
    score_home: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    score_away: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    score_halftime_home: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    score_halftime_away: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    referee: {
        type: DataTypes.STRING,
        allowNull: true
    },
    winner: {
        type: DataTypes.ENUM('1', 'X', '2'),
        allowNull: true
    },
    external_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'matches',
    timestamps: true
});

// Associations
Match.belongsTo(Team, { as: 'homeTeam', foreignKey: 'home_team_id' });
Match.belongsTo(Team, { as: 'awayTeam', foreignKey: 'away_team_id' });

module.exports = Match;
