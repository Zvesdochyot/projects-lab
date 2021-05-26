const Sequilize = require('sequelize');

const Model = Sequilize.Model;

/**
 * A class for managing projects. Represents table in a database, using Sequelize API.
 * @category Models
 * @class
 * @extends Sequilize.Model
 * @property {!number} id - Primary auto-increment key to use by the database.
 * @property {!number} userId - Unique identifier of the user who created the project.
 * @property {!string} name - The project name.
 * @property {?string} description - The project description (optional).
 * @property {!string} dashboardOrder - Order of the project on the dashboard.
 * @property {?string} backgroundColor - The project label color (optional).
 * @property {!Date} createdAt - The project creation date.
 * @property {?Date} updatedAt - Date of project information update (optional).
 */
class Project extends Model {}
Project.init(
    {
        id: {
            type: Sequilize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: Sequilize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'author_id',
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        description: {
            type: Sequilize.TEXT,
            allowNull: true
        },
        dashboardOrder: {
            type: Sequilize.INTEGER,
            allowNull: false,
            field: 'dashboard_order'
        },
        backgroundColor: {
            type: Sequilize.STRING,
            allowNull: true,
            defaultValue: 'blue',
            field: 'background_color'
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
        modelName: 'project',
        tableName: 'projects',
        timestamps: false
    }
);

module.exports = Project;