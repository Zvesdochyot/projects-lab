const models = require('../models');
const Project = models.Project;
const { Op } = require('sequelize');

exports.getProjectsForLoggedUser = async (req, res) => {
    const projectsCollection = await Project.findAll({
        where: {
            userId: req?.user?.user?.id
        },
        order: [
            ['dashboard_order', 'ASC']
        ]
    });
    res.status(200).json(projectsCollection);
};

exports.reindexProjectsForLoggedUser = async (req, res) => {
    const projectId = req.body.projectId;
    const newIndex = req.body.newIndex;
    const oldIndex = req.body.oldIndex;

    if (newIndex > oldIndex) {
        const projects = await Project.findAll({
            where: {
                userId: req?.user?.user?.id,
                dashboardOrder: {
                    [Op.lte]: newIndex
                },
                [Op.not]: [
                    { id: [projectId] }
                ],
            },
            order: [
                ['dashboard_order', 'ASC']
            ]
        });
        for (let index = 0; index < projects.length; index++) {
            let projectFind =  projects[index];
            projectFind.dashboardOrder = index;
            await projectFind.save();
        }
    } else if (newIndex < oldIndex) {
        const projects = await Project.findAll({
            where: {
                userId: req?.user?.user?.id,
                dashboardOrder: {
                    [Op.gte]: newIndex
                },
                [Op.not]: [
                    { id: [projectId] }
                ],
            },
            order: [
                ['dashboard_order', 'ASC']
            ]
        });
        for (let index = 0; index < projects.length; index++) {
            let projectFind = projects[index];
            projectFind.dashboardOrder = newIndex + index + 1;
            await projectFind.save();
        }
    }

    const project = await Project.findOne({ where: { id: projectId } });
    project.dashboardOrder = newIndex;
    await project.save();

    res.status(204).json();
};

