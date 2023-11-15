const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const teacher = sequelize.define('teacher', {
    teacherId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    specialization: {
        allowNull: false,
        type: DataTypes.STRING,
    },
},{
        timestamps: true,
        paranoid: true,
    })

    module.exports = teacher;