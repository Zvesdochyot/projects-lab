const jwt = require('jsonwebtoken');
const env = require('../env');

module.exports = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        res.status(401).json({
            message: 'Unauthorized!',
            code: 'unauthorized'
        });
    } else {
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, env.jwt.secret, (err, user) => {
            if (err) res.status(401).json({
                message: 'Unauthorized!',
                code: 'unauthorized'
            });
            req.user = user;
            next();
        });
    }
};