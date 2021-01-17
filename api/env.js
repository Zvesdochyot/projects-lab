const JWT_SECRET = require('crypto').randomBytes(64).toString('hex');
const CLIENT_APP_URL = 'http://localhost:8080';

const GOOGLE_CLIENT_ID = '';
const GOOGLE_SECRET_KEY = '';

function setEnvironmentVariables() {
    process.env['JWT_SECRET'] = JWT_SECRET;
    process.env['CLIENT_APP_URL'] = CLIENT_APP_URL;
    process.env['GOOGLE_SECRET_KEY'] = GOOGLE_SECRET_KEY;
    process.env['GOOGLE_CLIENT_ID'] = GOOGLE_CLIENT_ID;
}

module.exports = setEnvironmentVariables;