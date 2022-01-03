const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: Number,
});

module.exports = mongoose.model('Message', messageSchema);
