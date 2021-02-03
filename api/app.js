require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const dbConnection = require('./database/connection');
const cors = require('cors');
const passportSetup = require('./config/passport');
const errorHandler = require('./middlewares/errorHandler');

const corsOptions = {
    origin: process.env.CLIENT_APP_URL
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', require('./routes'));
app.use(errorHandler);

const PORT = process.env.PORT || 4444;

dbConnection.authenticate()
    .then(() => {
        console.log('MySQL connected!');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(PORT, () => {
    console.log(`Server started, port: ${PORT}`);
});