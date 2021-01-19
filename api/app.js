require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const router = express.Router();
const dbConnection = require('./config/database/connection');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');

const corsOptions = {
    origin: process.env.CLIENT_APP_URL
};

const authMiddleware = require('./middlewares/authMiddleware');

router.use('/auth', require('./routes/authRoutes'));
router.use('/social/auth', require('./routes/socialAuthRoutes'));
router.use('/users', authMiddleware, require('./routes/userRoutes'));
router.use('/projects', authMiddleware, require('./routes/projectRoutes'));

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', router);


(async () => {
    try {
        console.log('Environment variables are set!');

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