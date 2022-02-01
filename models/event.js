const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const EventSchema = new Schema({
  name    : { type : String, required: true, trim: true },
  start     : { type : Date, required: true },
  hasEnded        : { type : Boolean }
});

module.exports = mongoose.model('Event', EventSchema, 'events');
