const Sequilize = require('sequelize');

const Model = Sequilize.Model;

/**
 * A class for managing users. Represents table in a database, using Sequelize API.
 * @category Models
 * @class
 * @extends Sequilize.Model
 * @property {!number} id - Primary auto-increment key to use by the database.
 * @property {!string} name - User name.
 * @property {?string} account_id - Unique account id in string representation (optional).
 * @property {?string} access_token - User access token (optional).
 * @property {?string} refresh_token - User refresh token (optional).
 * @property {?string} provider - Social media registration provider (if used during registration).
 * @property {!string} email - User's email address.
 * @property {!string} nickname - Unique user nickname.
 * @property {?string} avatar - User avatar in string representation.
 * @property {!string} password - User password in encrypted format, obtained using bcrypt library.
 * @property {?Date} emailVerifiedAt - Date of confirmation of email by the user.
 * @property {!Date} createdAt - User account creation date.
 * @property {?Date} updatedAt - Date of the last change of the account by the user.
 */
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
        account_id: {
            type: Sequilize.STRING,
            unique: true,
            allowNull: true,
        },
        access_token: {
            type: Sequilize.TEXT,
            unique: false,
            allowNull: true,
        },
        refresh_token: {
            type: Sequilize.TEXT,
            unique: false,
            allowNull: true,
        },
        provider: {
            type: Sequilize.STRING,
            unique: false,
            allowNull: true
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
        sequelize: require('../database/connection'),
        modelName: 'user',
        tableName: 'users',
        timestamps: false
    }
);

module.exports = User;