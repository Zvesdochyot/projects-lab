const Sequelize = require('sequelize');
const dbConfig = require('../../config/database')[process.env.NODE_ENV || 'development'];

module.exports = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: false,
    }
);