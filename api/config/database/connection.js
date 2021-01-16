const Sequilize = require('sequelize');
const env = process.env.NODE_APP_ENV || 'development';
const dbConfig = require('./database')[env];

module.exports = new Sequilize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: false
    }
);