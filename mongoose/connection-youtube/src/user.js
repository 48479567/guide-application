const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  birthDate: Date,
  isAdmin: Boolean,
  friends: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  phoneNumbers: [{
    number: String,
    label: String,
  }],
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
}, { collection: 'users' });

const User = mongoose.model('User', schema);

module.exports = User;

