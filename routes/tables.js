/**
 * Created by Anastasiia on 23.02.2019.
 */

const User = require('../models/user'); // Import User Model Schema
const Table = require('../models/table');
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {


    router.post('/newTable', (req, res) => {

        if((!req.body.Monday_1) || (!req.body.Tuesday_1) || (!req.body.Wednesday_1) || (!req.body.Thursday_1) || (!req.body.Friday_1)){
            res.json({success: false, message: "Day_1 is required"});
        } else {
            if(!req.body.Monday_2 || !req.body.Tuesday_2 || !req.body.Wednesday_2 || !req.body.Thursday_2 || !req.body.Friday_2){
                res.json({success: false, message: "Day_2 is required"});
            } else {
                if(!req.body.Monday_3 || !req.body.Tuesday_3 || !req.body.Wednesday_3 || !req.body.Thursday_3 || !req.body.Friday_3){
                    res.json({success: false, message: "Day_3 is required"});
                } else {
                    if(!req.body.Monday_4 || !req.body.Tuesday_4 || !req.body.Wednesday_4 || !req.body.Thursday_4 || !req.body.Friday_4){
                        res.json({success: false, message: "Day_4 is required"});
                    } else {
                        if(!req.body.Monday_5 || !req.body.Tuesday_5 || !req.body.Wednesday_5 || !req.body.Thursday_5 || !req.body.Friday_5){
                            res.json({success: false, message: "Day_5 is required"});
                        } else {
                            if(!req.body.Monday_6 || !req.body.Tuesday_6 || !req.body.Wednesday_6 || !req.body.Thursday_6 || !req.body.Friday_6){
                                res.json({success: false, message: "Day_6 is required"});
                            } else {
                                if(!req.body.Monday_7 || !req.body.Tuesday_7 || !req.body.Wednesday_7 || !req.body.Thursday_7 || !req.body.Friday_7){
                                    res.json({success: false, message: "Day_7 is required"});
                                } else {



                                    const table = new Table({
                                        Monday_1: req.body.Monday_1,
                                        Monday_2: req.body.Monday_2,
                                        Monday_3: req.body.Monday_3,
                                        Monday_4: req.body.Monday_4,
                                        Monday_5: req.body.Monday_5,
                                        Monday_6: req.body.Monday_6,
                                        Monday_7: req.body.Monday_7,
                                        Tuesday_1: req.body.Tuesday_1,
                                        Tuesday_2: req.body.Tuesday_2,
                                        Tuesday_3: req.body.Tuesday_3,
                                        Tuesday_4: req.body.Tuesday_4,
                                        Tuesday_5: req.body.Tuesday_5,
                                        Tuesday_6: req.body.Tuesday_6,
                                        Tuesday_7: req.body.Tuesday_7,
                                        Wednesday_1: req.body.Wednesday_1,
                                        Wednesday_2: req.body.Wednesday_2,
                                        Wednesday_3: req.body.Wednesday_3,
                                        Wednesday_4: req.body.Wednesday_4,
                                        Wednesday_5: req.body.Wednesday_5,
                                        Wednesday_6: req.body.Wednesday_6,
                                        Wednesday_7: req.body.Wednesday_7,
                                        Thursday_1: req.body.Thursday_1,
                                        Thursday_2: req.body.Thursday_2,
                                        Thursday_3: req.body.Thursday_3,
                                        Thursday_4: req.body.Thursday_4,
                                        Thursday_5: req.body.Thursday_5,
                                        Thursday_6: req.body.Thursday_6,
                                        Thursday_7: req.body.Thursday_7,
                                        Friday_1: req.body.Friday_1,
                                        Friday_2: req.body.Friday_2,
                                        Friday_3: req.body.Friday_3,
                                        Friday_4: req.body.Friday_4,
                                        Friday_5: req.body.Friday_5,
                                        Friday_6: req.body.Friday_6,
                                        Friday_7: req.body.Friday_7
                                    });


                                    table.save((err) => {
                                        if(err){

                                            res.json({ success: false, message: err});

                                        } else {
                                            res.json({ success: true, message: 'Table saved!'})
                                        }
                                    });



                                }
                            }
                        }
                    }
                }
            }
        }

    });






    /* ===============================================================
     GET ALL TABLES
     =============================================================== */
    router.get('/allTables', (req, res) => {
        // Search database for all table posts
        Table.find({}, (err, tables) => {
        // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if tables were found in database
                if (!tables) {
                    res.json({ success: false, message: 'No tables found.' }); // Return error of no tables found
                } else {
                    res.json({ success: true, tables: tables }); // Return success and tables array
                }
            }
        }).sort({ '_id': -1 }); // Sort tables from newest to oldest
    });







    return router;

}