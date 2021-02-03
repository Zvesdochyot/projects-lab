require('dotenv').config({ path: './.env' });

const express = require('express');
const app = express();
const dbConnection = require('./database/connection');
const cors = require('cors');
// const passportSetup = require('./config/passport-setup');
const errorHandler = require('./middlewares/errorHandler');

const corsOptions = {
    origin: process.env.CLIENT_APP_URL
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api-test', (req, res) => {
    res.status(200).json(process.env);
});

app.use('/api/v1', require('./routes'));
app.use(errorHandler);

(async () => {
    try {
        const PORT = process.env.PORT || 4444;
        await dbConnection.authenticate();
        console.log('MySQL connected!');

        app.listen(PORT, () => {
            console.log(`Server started, port: ${PORT}`);
        });
    } catch (e) {
         console.log(e);
    }
})();