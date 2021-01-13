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
            default: 0
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
        modelName: 'project',
        tableName: 'projects',
        timestamps: false
    }
);

module.exports = Project;