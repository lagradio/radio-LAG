/**
 * Created by Anastasiia on 22.02.2019.
 */

const User = require('../models/user'); // Import User Model Schema
const Card = require('../models/card');
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {


    router.post('/newCard', (req, res) => {
        if(!req.body.firstCardTitle){
            res.json({ success: false, message:"Card title is required"});
        } else {
            if(!req.body.secondCardTitle){
                res.json({ success: false, message:"Card title is required"});
            } else {
                if(!req.body.thirdCardTitle){
                    res.json({ success: false, message:"Card title is required"});
                } else {
                    if(!req.body.fourthCardTitle){
                        res.json({ success: false, message:"Card title is required"});
                    } else {
                        if(!req.body.firstCardTime){
                            res.json({ success: false, message:"Card time is required"});
                        } else {
                            if(!req.body.secondCardTime){
                                res.json({ success: false, message:"Card time is required"});
                            } else {
                                if(!req.body.thirdCardTime){
                                    res.json({ success: false, message:"Card time is required"});
                                } else {
                                    if(!req.body.fourthCardTime){
                                        res.json({ success: false, message:"Card time is required"});
                                    } else {
                                        const card = new Card({
                                            firstCardTitle: req.body.firstCardTitle,
                                            secondCardTitle: req.body.secondCardTitle,
                                            thirdCardTitle: req.body.thirdCardTitle,
                                            fourthCardTitle: req.body.fourthCardTitle,
                                            firstCardTime: req.body.firstCardTime,
                                            secondCardTime: req.body.secondCardTime,
                                            thirdCardTime: req.body.thirdCardTime,
                                            fourthCardTime: req.body.fourthCardTime
                                        });
                                        card.save((err) => {
                                            if(err){

                                                res.json({ success: false, message: err});

                                            } else {
                                                res.json({ success: true, message: 'Card saved!'})
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });







    /* ===============================================================
     GET ALL CARDS
     =============================================================== */
    router.get('/allCards', (req, res) => {
        // Search database for all card posts
        Card.find({}, (err, cards) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if blogs were found in database
                if (!cards) {
                    res.json({ success: false, message: 'No cards found.' }); // Return error of no cards found
                } else {
                    res.json({ success: true, cards: cards }); // Return success and cards array
                }
            }
        }).sort({ '_id': -1 }); // Sort cards from newest to oldest
    });






    return router;

}