const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
     ad: {
                type: String,
                required: true
            },
     bankId: {
                type: Schema.Types.ObjectId,
                ref: 'foodBank',
                required: true
            }
  
});

module.exports = mongoose.model('Address', addressSchema);