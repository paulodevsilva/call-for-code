const mongoose = require('mongoose');

const donationType = {
  financial:'1',
  job: '2'
}

const DonationSchema = new mongoose.Schema({
  donator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  beneficiary:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  event:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  type: {
    type: String,
    enum: Object.values(donationType),
    default: donationType.donator,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Donation', DonationSchema);