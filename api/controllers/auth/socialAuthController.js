const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.googleProvider = passport.authenticate('google', {
    scope: ['profile', 'email']
});

exports.googleProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 });
    res.redirect(process.env.CLIENT_APP_URL + '/social-auth/callback?token=' + token);
};


exports.facebookProvider = passport.authenticate('facebook', {
    scope: 'email'
});

exports.facebookProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 });
    res.redirect(process.env.CLIENT_APP_URL + '/social-auth/callback?token=' + token);
};

exports.githubProvider = passport.authenticate('github', {
    scope: 'email'
});

exports.githubProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 });
    res.redirect(process.env.CLIENT_APP_URL + '/social-auth/callback?token=' + token);
};