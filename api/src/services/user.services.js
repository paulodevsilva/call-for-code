const User = require('../models/User');

class UserServices {

  async create(payload) {
    const userAlreadyExists = await User.findOne({ email: payload.email });

    if (userAlreadyExists) {
      throw new Error('user already exists');
    }

    const user = await User.create(payload);
    
    return user;
  }

  async login(payload) {
    const userAlreadyExists = await User.findOne({ email: payload.email });

    if (!userAlreadyExists) {
      throw new Error('user not exists');
    } 

    if (userAlreadyExists.password !== payload.password) {
      throw new Error('incorrect password');
    }

    return {
      msg: 'successfully logged in',
      user: {
        name: userAlreadyExists.name,
        email: userAlreadyExists.email
      }
    };
  }
}

module.exports = UserServices;