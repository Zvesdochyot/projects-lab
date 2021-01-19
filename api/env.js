const JWT_SECRET = 'f1ad9f5c14df6550f505a7aa7ad25f554824bf3ae2c6ffbf06ee2afe7c06b505fdbb9f56ad8d1254d7ea3c566cbc60754912ea6aed730f76da045b8c499d4839';
const CLIENT_APP_URL = 'http://localhost:8080';

module.exports = {
    port: 3333,
    jwt: {
        secret: JWT_SECRET,
    },
    client: {
        appUrl: CLIENT_APP_URL,
    },
    google: {
        secretKey: 'daJYY0lr1bBL0YajRUSgghp5',
        clientID: '537138569115-1qcsgeul6bq1hh9uebu14e3kgg5t3r45.apps.googleusercontent.com',
        callbackURL: '/api/v1/social/auth/google/callback'
    },
    facebook: {
        secretKey: '1bb5a954b8cb77a4ea82de51f0484c51',
        clientID: '1098264383953753',
        callbackURL: '/api/v1/social/auth/facebook/callback'
    },
    github: {
        clientID: '109f55e73c4c94b605d3',
        clientSecret: '51a7b4f4d53d99795c2f9c20f85b61df79ab46dc',
        callbackURL: '/api/v1/social/auth/github/callback'
    }
};