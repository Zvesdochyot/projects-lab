const envFile = './.env';
require('dotenv').config({ path: envFile });

const express = require('express');


const app = express();

const dbConnection = require('./database/connection');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const passportSetup = require('./config/passport');
const errorHandler = require('./middlewares/errorHandler');

const corsOptions = {
    origin: process.env.CLIENT_APP_URL
};

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ProjectsLab',
            version: '1.0.0',
            description: 'ProjectsLab Library API'
        },
        servers: [
            {
                url: 'http://localhost:3333'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use('/api/v1', require('./routes'));
app.use(errorHandler);

const PORT = process.env.PORT || 3333;

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

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
