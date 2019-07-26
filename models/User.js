const mongoose = reuquire('mongoose');

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    name: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);