const models = require('../models');
const Project = models.Project;

exports.getProjectsForLoggedUser = async (req, res) => {
    const projectsCollection = await Project.findAll({
        where: {
            userId: req?.user?.user?.id
        }
    });
    res.status(200).json(projectsCollection);
};

