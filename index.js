/**
 * Created by Anastasiia Kostiv on 09.02.2019.
 */

/* ===================
 Import Node Modules
 =================== */
const express = require('express');
const app = express();
const firebase = require('firebase');
const config = require('./config/database');
const path = require('path');


// Database Connection
firebase.initializeApp(config);
var connectedRef = firebase.database().ref(".info/connected");
connectedRef.on("value", function(snap) {
    if (snap.val() === true) {
        console.log("Connected Firebase");

    } else {
        console.log("!!!CONNECTION DOESN'T EXIST!!!");
    }
});


// Provide static directory for frontend
app.use(express.static(__dirname + '/radiostation/public/'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/radiostation/public/index.html'));
});

// Start Server: Listen on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080');
});