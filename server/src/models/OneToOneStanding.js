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
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'one_to_one_standings',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

module.exports = OneToOneStanding;
