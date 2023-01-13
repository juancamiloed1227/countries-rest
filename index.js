// Import dependencies, controllers, models and utils
import express from 'express';
import mysql from 'mysql';
import logModel from './models/log.js';
import dbConfig from './config/db.js';
import apiRoutes from './routes/api.js';

// Create connection to database
const connection = mysql.createConnection(dbConfig);

// Create an instance of Express app
const app = express();

// Asign controllers and model to Express app
app.use((req, res, next) => {
    req.logModel = logModel;
    req.connection = connection;
    next();
});

// Use web service routes
app.use('/api', apiRoutes);

// Start server on specified PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});