const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
})