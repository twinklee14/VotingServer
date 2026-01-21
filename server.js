const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db');
//body parser- converts incoming http data of different forms into json format for express to use
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const { jwtAuthMiddleware } = require('./jwt');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
