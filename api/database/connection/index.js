const Sequelize = require('sequelize');

module.exports = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        port: proess.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DRIVER,
        logging: false,
    }
);