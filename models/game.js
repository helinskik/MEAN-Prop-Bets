const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const GameSchema = new Schema({
  name    : { type : String, required: true, trim: true },
  eventId     : { type : String, required: true }
});

module.exports = mongoose.model('Game', GameSchema, 'games');
