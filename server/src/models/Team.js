const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Team = sequelize.define('Team', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    short_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    crest_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tla: { // Three letter abbreviation provided by API usually
        type: DataTypes.STRING(3),
        allowNull: true
    }
}, {
    tableName: 'teams',
    timestamps: false
});

module.exports = Team;
