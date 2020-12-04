const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const port = process.env.PORT || 3333;

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

const mongoDbUrl = require('./config/mongodb');

app.use(express.json());
app.use('/api/v1', router);

async function start() {
    try {
        await mongoose.connect(mongoDbUrl, {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(port);
    } catch (e) {
        console.log(error);
    }

}


start();
