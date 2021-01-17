const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models').User;

passport.use(
    new GoogleStrategy({
        callbackURL: '/api/v1/social/auth/google/callback',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_KEY
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        let user = await User.findOne({ where: { account_id: profile.id }});
        if (user) {
            user.access_token = accessToken;
            user.refresh_token = refreshToken;
            await user.save();
            return done(null, user);
        } else {
            user = await User.findOne({ where: { email: profile.emails[0].value }});
            if (user) {
                return done(null, user);
            }
            user = await User.findOne({ where: { nickname: getNickname(profile.displayName) }});
            if (user) {
                return done(null, user);
            }
            user = User.build({
                name: profile.displayName,
                nickname: getNickname(profile.displayName),
                email: profile.emails[0].value,
                account_id: profile.id,
                provider: 'google',
                access_token: accessToken,
                refresh_token: refreshToken,
                password: require('crypto').randomBytes(40).toString('hex')
            });
            await user.save();
            return done(null, user);
        }
    })
);

function getNickname(displayName) {
    return displayName.toLowerCase().replace(' ', '-');
}