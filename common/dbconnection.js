const config = require("../config")
const {sequelize, Sequelize} = require("sequelize")

const database = new Sequelize(config.db)
database.authenticate().then(()=>{
    console.log("DB Connection Successfull");
}).catch((err)=>{
    console.log(err);
})

module.exports = database