const router = require('express').Router();
const socialAuthController = require('../controllers/auth/socialAuthController');

router.get('/:provider', socialAuthController.redirectToProvider);

module.exports = router;