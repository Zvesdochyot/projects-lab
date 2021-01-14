const Sequilize = require('sequelize');

const Model = Sequilize.Model;
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
        modelName: 'project',
        tableName: 'projects',
        timestamps: false
    }
);

module.exports = Project;