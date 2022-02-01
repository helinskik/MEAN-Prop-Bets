const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const BetSchema = new Schema({
  question   : { type : String, required: true, trim: true },
  questionText    : { type : String, required: true, trim: true },
  guess       : { type : String, trim: true },
  answer     : { type : String, trim: true },
  playerId        : { type : String, required: true },
  groupId     : { type : String, required: true },
  eventId     : { type : String, required: true }
});

module.exports = mongoose.model('Bet', BetSchema, 'bets');
