const router = require('express').Router();
const socialAuthController = require('../controllers/auth/socialAuthController');
const passport = require('passport');


router.get('/google', socialAuthController.googleProvider);
router.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    socialAuthController.googleProviderCallback
);

router.get('/facebook', socialAuthController.facebookProvider);
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { session: false }),
    socialAuthController.facebookProviderCallback
);

router.get('/github', socialAuthController.githubProvider);
router.get(
    '/github/callback',
    passport.authenticate('github', { session: false }),
    socialAuthController.githubProviderCallback
);

module.exports = router;