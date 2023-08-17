const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'employer', 'candidate'], required: true },
  avatar: {
    type: String,
    default: 'https://cdn0.iconfinder.com/data/icons/internet-of-things-214/512/manufacturing-iot-intelligence-smart-industrial-robot-factory-2-512.png'}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
