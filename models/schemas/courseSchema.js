const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")
const course = sequelize.define('course',{
    courseId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true, 
    paranoid: true,
})

module.exports = course; 