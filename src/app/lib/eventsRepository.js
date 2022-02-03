const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Event = require('../models/event');

class EventsRepository {

    // get all the events
    getEvents(callback) {
        console.log('*** EventsRepository.getEvents');
        Event.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Events count: ${count}`);

            Event.find({}, (err, events) => {
                if (err) { 
                    console.log(`*** EventsRepository.getEvents error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    events: events
                });
            });

        });
    }

    getPagedEvents(skip, top, callback) {
        console.log('*** EventsRepository.getPagedEvents');
        Event.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Events count: ${count}`);

            Event.find({})
                    //.sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, events) => {
                        if (err) { 
                            console.log(`*** EventsRepository.getPagedEvents error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            events: events
                        });
                    });

        });
    }

    // get the event summary
    getEventsSummary(skip, top, callback) {
        console.log('*** EventsRepository.getEventsSummary');
        Event.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Events count: ${count}`);

            Event.find({}, { '_id': 0, 'firstName': 1, 'lastName': 1, 'city': 1, 'state': 1, 'orderCount': 1, 'gender': 1 })
                    .skip(skip)
                    .limit(top)
                    .exec((err, eventsSummary) => {
                        callback(null, {
                            count: count,
                            eventsSummary: eventsSummary
                        });
                    });

        });
    }

    // get a  event
    getEvent(id, callback) {
        console.log('*** EventsRepository.getEvent');
        Event.findById(id, (err, event) => {
            if (err) { 
                console.log(`*** EventsRepository.getEvent error: ${err}`); 
                return callback(err); 
            }
            callback(null, event);
        });
    }

    // insert a  event
    insertEvent(body, callback) {
        console.log('*** EventsRepository.insertEvent');
        let event = new Event();
        console.log(body);

        event.name = body.name;
        event.start = body.start;
        event.hasEnded = body.hasEnded;

        event.save((err, event) => {
            if (err) { 
                console.log(`*** EventsRepository insertEvent error: ${err}`); 
                return callback(err, null); 
            }

            callback(null, event);
        });
    }

    updateEvent(id, body, callback) {
        console.log('*** EventsRepository.editEvent');

        Event.findById(id, (err, event)  => {
            if (err) { 
                console.log(`*** EventsRepository.editEvent error: ${err}`); 
                return callback(err); 
            }

            event.name = body.name || event.firstName;
            event.start = body.start || event.start;
            event.hasEnded = body.hasEnded || event.hasEnded;


            event.save((err, event) => {
                if (err) { 
                    console.log(`*** EventsRepository.updateEvent error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, event);
            });

        });
    }

    // delete a event
    deleteEvent(id, callback) {
        console.log('*** EventsRepository.deleteEvent');
        Event.remove({ '_id': id }, (err, event) => {
            if (err) { 
                console.log(`*** EventsRepository.deleteEvent error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, event);
        });
    }

}

module.exports = new EventsRepository();