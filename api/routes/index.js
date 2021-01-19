const router = require('express').Router();

const authMiddleware = require('../middlewares/authMiddleware');

router.use('/auth', require('./authRoutes'));
router.use('/social/auth', require('./socialAuthRoutes'));
router.use('/users', authMiddleware, require('./userRoutes'));
router.use('/projects', authMiddleware, require('./projectRoutes'));

module.exports = router;