'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [
            {
                name: 'User Name #1',
                email: 'user_name_one@user.com',
                nickname: 'user_name_first',
                password: await bcrypt.hash('password', 10)
            },
            {
                name: 'User Name #2',
                email: 'user_name_two@user.com',
                nickname: 'user_name_second',
                password: await bcrypt.hash('password', 10)
            },
            {
                name: 'User Name #3',
                email: 'user_name_three@user.com',
                nickname: 'user_name_third',
                password: await bcrypt.hash('password', 10)
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
