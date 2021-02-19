const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getProjectsForLoggedUser);
router.put('/change-order', projectController.reindexProjectsForLoggedUser);

module.exports = router;