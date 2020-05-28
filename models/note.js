const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Note', noteSchema);
