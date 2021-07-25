const mongoose = require('mongoose');

const perfis = {
  beneficiary:'1',
  donator: '2'
}

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  perfil: {
    type: String,
    enum: Object.values(perfis),
    default: perfis.donator,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('User', UserSchema);