const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt/jwt.config');

module.exports = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        res.status(401).json({
            message: 'Unauthorized!',
            code: 'unauthorized'
        });
    } else {
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, jwtConfig.JWT_SECRET, (err, user) => {
            if (err) res.status(401).json({
                message: 'Unauthorized!',
                code: 'unauthorized'
            });
            req.user = user;
            next();
        });
    }
};