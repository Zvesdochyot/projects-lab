const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getProjectsForLoggedUser);

module.exports = router;