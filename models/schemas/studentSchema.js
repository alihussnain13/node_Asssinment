const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const student = sequelize.define('student',{
    studentId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    paranoid: true,
})

module.exports = student;