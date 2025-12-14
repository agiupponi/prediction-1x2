const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Match = require('./Match');

const Prediction = sequelize.define('Prediction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.STRING(128), // Storing Firebase UID
        allowNull: false
    },
    prediction: {
        type: DataTypes.ENUM('1', 'X', '2'),
        allowNull: false
    }
}, {
    tableName: 'predictions',
    timestamps: true
});

// Associations
Prediction.belongsTo(Match, { foreignKey: 'match_id' });

module.exports = Prediction;
