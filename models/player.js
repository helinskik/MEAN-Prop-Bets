const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name    : { type : String, required: true, trim: true },
  gameId     : { type : String, required: true },
  record        : { type : String, trim: true }
});

module.exports = mongoose.model('Player', PlayerSchema, 'players');
