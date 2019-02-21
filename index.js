/**
 * Created by Anastasiia Kostiv on 09.02.2019.
 */

/* ===================
 Import Node Modules
 =================== */
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;


// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    } else {
        console.log('Connected to database: ' + config.db);
}
});


// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
// Provide static directory for frontend
app.use(express.static(__dirname + '/public/'));
app.use('/authentication', authentication);

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start Server: Listen on port 8080
app.listen(port, () => {
    console.log('Listening on port' + port);
});