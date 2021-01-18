const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const GitHubStrategy = require('passport-github');
const User = require('../models').User;
const env = require('../env');

passport.use(
    new GoogleStrategy({
        callbackURL: env.google.callbackURL,
        clientID: env.google.clientID,
        clientSecret: env.google.secretKey
    },
    async (accessToken, refreshToken, profile, done) => {
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

passport.use(
    new FacebookStrategy({
        clientID: env.facebook.clientID,
        clientSecret: env.facebook.secretKey,
        callbackURL: env.facebook.callbackURL,
        profileFields: ['id', 'displayName', 'email', 'name']
    },
    async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({ where: { account_id: profile.id }});
        if (user) {
            user.access_token = accessToken;
            user.refresh_token = refreshToken;
            await user.save();
            return done(null, user);
        } else {
            user = await User.findOne({where: {email: profile.emails[0].value}});
            if (user) {
                return done(null, user);
            }
            user = await User.findOne({where: {nickname: getNickname(profile.displayName)}});
            if (user) {
                return done(null, user);
            }
            user = User.build({
                name: profile.displayName,
                nickname: getNickname(profile.displayName),
                email: profile.emails[0].value,
                account_id: profile.id,
                provider: 'facebook',
                access_token: accessToken,
                refresh_token: refreshToken,
                password: require('crypto').randomBytes(40).toString('hex')
            });
            await user.save();
            return done(null, user);
        }
    })
);

passport.use(
    new GitHubStrategy({
        clientID: env.github.clientID,
        clientSecret: env.github.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({ where: { account_id: profile.id }});
        if (user) {
            user.access_token = accessToken;
            user.refresh_token = refreshToken;
            await user.save();
            return done(null, user);
        } else {
            user = await User.findOne({where: {email: profile.emails[0].value}});
            if (user) {
                return done(null, user);
            }
            user = await User.findOne({ where: { nickname: profile.username } });
            if (user) {
                return done(null, user);
            }
            user = User.build({
                name: profile.displayName,
                nickname: getNickname(profile.displayName),
                email: profile.emails[0].value,
                account_id: profile.id,
                provider: 'github',
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