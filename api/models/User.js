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
        email_verified_at: {
            type: Sequilize.DATE,
            allowNull: true
        },
        createdAt: {
            type: Sequilize.DATE,
            allowNull: false,
            defaultValue: Date.now()
        },
        updatedAt: {
            type: Sequilize.DATE,
            allowNull: true,
            default: null
        }
    },
    {
        sequelize: require('../config/connection'),
        modelName: 'user',
        tableName: 'users',
        timestamps: false
    }
);

module.exports = User;