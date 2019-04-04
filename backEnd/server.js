/*****************************************************************************************************
 *  @Purpose  :To create the server and  populate it with this basic server code, 
 *             Configuration of the database and connect the server with the database,
 *             depending on which HTTP method is specified. 
 * 
 *  @file     :server.js
 *  @author   :pournima15patle
 *  @version  :1.0
 *  @since    :28-03-2019
 *****************************************************************************************************/

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
require('dotenv').config()

// parse the client request
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static('./frontEnd'));


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to chatapp lets start chat."});
});

// Require User routes
require('./routes/user.routes.js')(app);

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});