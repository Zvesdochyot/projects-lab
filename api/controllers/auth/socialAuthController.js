const passport = require('passport');
const jwt = require('jsonwebtoken');
const env = require('../../env');

exports.googleProvider = passport.authenticate('google', {
    scope: ['profile', 'email']
});

exports.googleProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        env.jwt.secret,
        { expiresIn: 3600 });
    res.redirect(env.client.appUrl + '/social-auth/callback?token=' + token);
};


exports.facebookProvider = passport.authenticate('facebook', {
    scope: 'email'
});

exports.facebookProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        env.jwt.secret,
        { expiresIn: 3600 });
    res.redirect(env.client.appUrl + '/social-auth/callback?token=' + token);
};

exports.githubProvider = passport.authenticate('github', {
    scope: 'email'
});

exports.githubProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        env.jwt.secret,
        { expiresIn: 3600 });
    res.redirect(env.client.appUrl + '/social-auth/callback?token=' + token);
};