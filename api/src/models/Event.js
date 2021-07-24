const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  beneficiary:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,

  },
  name:{
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Event', EventSchema);