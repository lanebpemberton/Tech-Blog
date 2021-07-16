//import sequelize
const Sequelize = require('sequelize');
//setup variable to return
let sequelize;
//evaluate sequelize string
if(process.env.DB_URL)
{
    sequelize = new Sequelize(process.env.DB_URL);
}else
{
    throw "REMOTE DB STRING NOT SETUP"
}

module.exports = sequelize;