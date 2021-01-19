const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const GitHubStrategy = require('passport-github');
const User = require('../models').User;
const mailer = require('../mail/mailer');

passport.use(
    new GoogleStrategy({
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_KEY
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
            mailer.sendRegisterMail(profile.displayName, profile.emails[0].value);
            return done(null, user);
        }
    })
);

passport.use(
    new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET_KEY,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
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
            mailer.sendRegisterMail(profile.displayName, profile.emails[0].value);
            return done(null, user);
        }
    })
);

passport.use(
    new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_SECRET_KEY,
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
            mailer.sendRegisterMail(profile.displayName, profile.emails[0].value);
            return done(null, user);
        }
    })
);


function getNickname(displayName) {
    return displayName.toLowerCase().replace(' ', '-');
}