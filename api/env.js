const JWT_SECRET = require('crypto').randomBytes(64).toString('hex');
const CLIENT_APP_URL = 'http://localhost:8080';

function setEnvironmentVariables() {
    process.env['JWT_SECRET'] = JWT_SECRET;
    process.env['CLIENT_APP_URL'] = CLIENT_APP_URL;
}

module.exports = setEnvironmentVariables;