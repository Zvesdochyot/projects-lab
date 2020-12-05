const {
    HTTP_UNAUTHORIZED,
    HTTP_FORBIDDEN
} = require('../constants/httpCodes');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

module.exports = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        res.status(HTTP_UNAUTHORIZED).json("Unauthorized!");
    } else {
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, jwtConfig.JWT_SECRET, (err, user) => {
            if (err) res.status(HTTP_FORBIDDEN).json("Unauthorized!");
            req.user = user;
            next();
        });
    }
};