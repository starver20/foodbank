const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    donors: [
        {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            }
        }
    ],
    requests: [
        {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            }
        }
    ]
    
})