const passport = require('passport');

exports.googleProvider = passport.authenticate('google', {
    scope: ['profile', 'email']
});

const jwt = require('jsonwebtoken');

exports.googleProviderCallback = (req, res) => {
    const token = jwt.sign(
        { user: req.user },
        process.env.JWT_SECRET,
        { expiresIn: 3600 });
    res.redirect(process.env.CLIENT_APP_URL + '/social-auth/callback?token=' + token);
};