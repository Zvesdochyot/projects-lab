const envFile = process.env.NODE_ENV === 'development' ? './.env' : './.env.prod';
require('dotenv').config({ path: envFile });

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

const PORT = process.env.PORT || 3333;

const path = require('path');

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

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