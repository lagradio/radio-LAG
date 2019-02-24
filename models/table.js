/**
 * Created by Anastasiia on 23.02.2019.
 */

const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Validate Function to check e-mail length
let tableLengthChecker = (table) => {
    if (!table) {
        return false;
    } else {
        if (table.length < 2 || table.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};


// Array of Card Validators
const tableValidators = [
    {
        validator: tableLengthChecker,
        message: 'Text length must be at least 2 characters but no more than 50'
    }
];


// User Model Definition
const tableSchema = new Schema({
    Monday_1: { type: String, required: true, validate: tableValidators },
    Monday_2: { type: String, required: true, validate: tableValidators },
    Monday_3: { type: String, required: true, validate: tableValidators },
    Monday_4: { type: String, required: true, validate: tableValidators },
    Monday_5: { type: String, required: true, validate: tableValidators },
    Monday_6: { type: String, required: true, validate: tableValidators },
    Monday_7: { type: String, required: true, validate: tableValidators },
    Tuesday_1: { type: String, required: true, validate: tableValidators },
    Tuesday_2: { type: String, required: true, validate: tableValidators },
    Tuesday_3: { type: String, required: true, validate: tableValidators },
    Tuesday_4: { type: String, required: true, validate: tableValidators },
    Tuesday_5: { type: String, required: true, validate: tableValidators },
    Tuesday_6: { type: String, required: true, validate: tableValidators },
    Tuesday_7: { type: String, required: true, validate: tableValidators },
    Wednesday_1	: { type: String, required: true, validate: tableValidators },
    Wednesday_2	: { type: String, required: true, validate: tableValidators },
    Wednesday_3	: { type: String, required: true, validate: tableValidators },
    Wednesday_4	: { type: String, required: true, validate: tableValidators },
    Wednesday_5	: { type: String, required: true, validate: tableValidators },
    Wednesday_6	: { type: String, required: true, validate: tableValidators },
    Wednesday_7	: { type: String, required: true, validate: tableValidators },
    Thursday_1: { type: String, required: true, validate: tableValidators },
    Thursday_2: { type: String, required: true, validate: tableValidators },
    Thursday_3: { type: String, required: true, validate: tableValidators },
    Thursday_4: { type: String, required: true, validate: tableValidators },
    Thursday_5: { type: String, required: true, validate: tableValidators },
    Thursday_6: { type: String, required: true, validate: tableValidators },
    Thursday_7: { type: String, required: true, validate: tableValidators },
    Friday_1: { type: String, required: true, validate: tableValidators },
    Friday_2: { type: String, required: true, validate: tableValidators },
    Friday_3: { type: String, required: true, validate: tableValidators },
    Friday_4: { type: String, required: true, validate: tableValidators },
    Friday_5: { type: String, required: true, validate: tableValidators },
    Friday_6: { type: String, required: true, validate: tableValidators },
    Friday_7: { type: String, required: true, validate: tableValidators }
});




// Export Module/Schema
module.exports = mongoose.model('Table', tableSchema);