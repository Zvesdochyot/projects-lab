'use strict';
const User = require('../../models').User;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await User.findAll();
        for (const user of users) {
            await queryInterface.bulkInsert('projects', [
                {
                    author_id: user.id,
                    dashboard_order: 0,
                    name: user.name + ' project',
                    description: user.name + ' desc',
                }
            ]);
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('projects', null, {});
    }
};
