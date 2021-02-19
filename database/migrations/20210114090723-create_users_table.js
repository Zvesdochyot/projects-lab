'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            account_id: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: true,
            },
            access_token: {
                type: Sequelize.TEXT,
                unique: false,
                allowNull: true,
            },
            refresh_token: {
                type: Sequelize.TEXT,
                unique: false,
                allowNull: true,
            },
            provider: {
                type: Sequelize.STRING,
                unique: false,
                allowNull: true
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            email_verified_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: true
            },
            nickname: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DataTypes.DATE
            },
            updated_at: {
                type: Sequelize.DataTypes.DATE
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};
