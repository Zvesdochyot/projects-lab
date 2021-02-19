const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class Chat extends Model {}
Chat.init(
    {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstUser: {
            type: Sequilize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'first_user',
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        secondUser: {
            type: Sequilize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'second_user',
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
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
        sequelize: require('../database/connection'),
        modelName: 'chat',
        tableName: 'chats',
        timestamps: false
    }
);

module.exports = Chat;