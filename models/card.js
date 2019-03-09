/**
 * Created by Anastasiia on 23.02.2019.
 */

const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Validate Function to check e-mail length
let cardLengthChecker = (card) => {
    if (!card) {
        return false;
    } else {
        if (card.length < 2 || card.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};


// Array of Card Validators
const cardValidators = [
    {
        validator: cardLengthChecker,
        message: 'Text length must be at least 2 characters but no more than 50'
    }
];


// User Model Definition
const cardSchema = new Schema({
    firstCardTitle: { type: String, required: true, validate: cardValidators },
    secondCardTitle: { type: String, required: true, validate: cardValidators },
    thirdCardTitle: { type: String, required: true, validate: cardValidators },
    fourthCardTitle: { type: String, required: true, validate: cardValidators },
    firstCardTime: { type: String, required: true, validate: cardValidators },
    secondCardTime: { type: String, required: true, validate: cardValidators },
    thirdCardTime: { type: String, required: true, validate: cardValidators },
    fourthCardTime: { type: String, required: true, validate: cardValidators }
});




// Export Module/Schema
module.exports = mongoose.model('Card', cardSchema);