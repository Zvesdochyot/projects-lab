'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('projects', {
            id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            author_id: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            dashboard_order: {
                type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            site_url: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true
            },
            repository_url: {
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
        await queryInterface.dropTable('projects');
    }
};
