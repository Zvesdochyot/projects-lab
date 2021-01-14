const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class Project extends Model {}
Project.init(
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
        description: {
            type: Sequilize.TEXT,
            allowNull: true
        },
        dashboardOrder: {
            type: Sequilize.INTEGER,
            allowNull: false,
            default: 0,
            field: 'dashboard_order'
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
        sequelize: require('../config/connection'),
        modelName: 'project',
        tableName: 'projects',
        timestamps: false
    }
);

module.exports = Project;