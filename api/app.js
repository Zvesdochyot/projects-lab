const express = require('express');
const app = express();
const router = express.Router();
const dbConnection = require('./config/database/connection');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080'
};

const authMiddleware = require('./middlewares/authMiddleware');

router.use('/auth', require('./routes/authRoutes'));
router.use('/users', authMiddleware, require('./routes/userRoutes'));
router.use('/projects', authMiddleware, require('./routes/projectRoutes'));

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/v1', router);

(async () => {
    try {
        const PORT = process.env.PORT || 3333;
        await dbConnection.authenticate();
        console.log('MySQL connected!');
        app.listen(PORT, () => {
            console.log(`server started, port: ${PORT}`);
        });
    } catch (e) {
         console.log(e);
    }
})();