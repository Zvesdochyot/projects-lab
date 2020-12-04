const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080'
};

const authMiddleware = require('./middlewares/authenticationMiddleware');

router.use('/auth', require('./routes/authRoutes'));
router.use('/users', authMiddleware, require('./routes/userRoutes'));
router.use('/projects', require('./routes/projectRoutes'));

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', router);

(async () => {
    try {
        await mongoose.connect(require('./config/mongodb'), {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(process.env.PORT || 3333);
    } catch (e) {
        console.log(e);
    }
})();