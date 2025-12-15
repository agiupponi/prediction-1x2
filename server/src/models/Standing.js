const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Standing = sequelize.define('Standing', {
    rank: {
        type: DataTypes.BIGINT, // rank is often bigint in postgres window functions
        primaryKey: true // View doesn't have PK but Sequelize needs one for Model usually. Rank is likely unique.
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
    tableName: 'standing',
    timestamps: false,
    underscored: true,
    freezeTableName: true // Prevent looking for 'standings'
});

module.exports = Standing;
