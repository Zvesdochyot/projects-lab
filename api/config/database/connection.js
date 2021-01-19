const Sequilize = require('sequelize');

module.exports = new Sequilize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DRIVER,
        logging: process.env.DATABASE_LOGGING
    }
);