const Project = require('../models/Project');

exports.getProjectsForLoggedUser = async (req, res) => {
    const projectsCollection = await Project.findAll();
    res.status(200).send(projectsCollection);
};