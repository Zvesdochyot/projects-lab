require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const dbConnection = require('./database/connection');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');

const corsOptions = {
    origin: process.env.CLIENT_APP_URL
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', require('./routes'));


(async () => {
    try {
        const PORT = process.env.port || 3333;
        await dbConnection.authenticate();
        console.log('MySQL connected!');

        app.listen(PORT, () => {
            console.log(`Server started, port: ${PORT}`);
        });
    } catch (e) {
         console.log(e);
    }
})();