const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class User extends Model {}
User.init(
    {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        email: {
            type: Sequilize.STRING,
            allowNull: false,
            unique: true
        },
        nickname: {
            type: Sequilize.STRING,
            allowNull: false,
            unique: true
        },
        avatar: {
            type: Sequilize.STRING,
            allowNull: true
        },
        password: {
            type: Sequilize.STRING,
            allowNull: false,
        },
        emailVerifiedAt: {
            type: Sequilize.DATE,
            allowNull: true,
            field: 'email_verified_at'
        },
        createdAt: {
            type: Sequilize.DATE,
            allowNull: false,
            defaultValue: Date.now(),
            field: 'created_at'
        },
        updatedAt: {
            type: Sequilize.DATE,
            allowNull: true,
            default: null,
            field: 'updated_at'
        }
    },
    {
        sequelize: require('../config/database/connection'),
        modelName: 'user',
        tableName: 'users',
        timestamps: false
    }
);

module.exports = User;