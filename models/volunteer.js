const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);




// volunteer 
// name 
// phone 
// address





