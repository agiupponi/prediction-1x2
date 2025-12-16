const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Odd = sequelize.define('Odd', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id' // match_id
    },
    prediction: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    total_predictions: {
        type: DataTypes.INTEGER
    },
    partial_prediction: {
        type: DataTypes.INTEGER
    },
    odd: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'odds',
    timestamps: false,
    freezeTableName: true // Ensure it uses 'odds' exact name, thought tableName handles it
});

// Since it's a view, we probably don't need associations or they are read-only.
// But we might want to link it to Match if needed, but not strictly required for this task.

module.exports = Odd;
