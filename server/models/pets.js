const mongoose = require('mongoose');
const Schema = mongoose.Schema

const petSchema = new Schema({
  id: { 
    type: Number, 
    required: true 
  },
  name: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  rate: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('pets', petSchema)