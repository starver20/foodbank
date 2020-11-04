const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    add: [
        {
            ad: {
                type: String,
                required: true
            },
            bankId: {
                type: Schema.Types.ObjectId,
                ref: 'foodBank',
                required: true
            }
        }
    ]
});