const Sequilize = require('sequelize');

const Model = Sequilize.Model;

/**
 * A class for managing chats between two people. Represents table in a database, using Sequelize API.
 * @category Models
 * @class
 * @extends Sequilize.Model
 * @property {!number} id - Primary auto-increment key to use by the database
 * @property {!number} firstUser - Unique identifier of the first {@link User} participating in the conversation
 * @property {!number} secondUser - Unique identifier of the second {@link User} participating in the conversation
 * @property {!Date} createdAt - Date of chat creation
 * @property {?Date} updatedAt - Date of last chat message
 */
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