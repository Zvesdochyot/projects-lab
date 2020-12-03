const express = require("express");
const app = express();
const router = express.Router();

const port = process.env.PORT || 3333;

const authRoutes = require('./routes/authRoutes');

router.use('/auth', authRoutes);



app.use('/api/v1', router);
app.listen(port);


