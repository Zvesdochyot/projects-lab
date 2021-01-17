const router = require('express').Router();
const socialAuthController = require('../controllers/auth/socialAuthController');
const passport = require('passport');


router.get('/google', socialAuthController.googleProvider);
router.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    socialAuthController.googleProviderCallback
);

module.exports = router;