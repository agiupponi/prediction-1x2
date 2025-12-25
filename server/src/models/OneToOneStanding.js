const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const OneToOneStanding = sequelize.define('OneToOneStanding', {
    rank: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    win: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    draw: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    loss: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'one_to_one_standings',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

module.exports = OneToOneStanding;
