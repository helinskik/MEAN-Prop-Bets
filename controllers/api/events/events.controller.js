const eventsRepo = require('../../../lib/eventsRepository'),
      util = require('util');

class EventsController {

    constructor(router) {
        router.get('/', this.getEvents.bind(this));
        router.get('/page/:skip/:top', this.getEventsPage.bind(this));
        router.get('/:id', this.getEvent.bind(this));
        router.post('/', this.insertEvent.bind(this));
        router.put('/:id', this.updateEvent.bind(this));
        router.delete('/:id', this.deleteEvent.bind(this));
    }

    getEvents(req, res) {
        console.log('*** getEvents');
        eventsRepo.getEvents((err, data) => {
            if (err) {
                console.log('*** getEvents error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getEvents ok');
                res.json(data.events);
            }
        });
    }

    getEventsPage(req, res) {
        console.log('*** getEventsPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        eventsRepo.getPagedEvents(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getEventsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getEventsPage ok');
                res.json(data.events);
            }
        });
    }

    getEvent(req, res) {
        console.log('*** getEvent');
        const id = req.params.id;
        console.log(id);

        eventsRepo.getEvent(id, (err, event) => {
            if (err) {
                console.log('*** getEvent error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getEvent ok');
                res.json(event);
            }
        });
    }

    insertEvent(req, res) {
        console.log('*** insertEvent');
        eventsRepo.insertEvent(req.body, (err, event) => {
            if (err) {
                console.log('*** eventsRepo.insertEvent error: ' + util.inspect(err));
                res.json({status: false, error: 'Insert failed', event: null});
            } else {
                console.log('*** insertEvent ok');
                res.json({ status: true, error: null, event: event });
            }
        });
    }

    updateEvent(req, res) {
        console.log('*** updateEvent');
        console.log('*** req.body');
        console.log(req.body);

        eventsRepo.updateEvent(req.params.id, req.body, (err, event) => {
            if (err) {
                console.log('*** updateEvent error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', event: null });
            } else {
                console.log('*** updateEvent ok');
                res.json({ status: true, error: null, event: event });
            }
        });
    }

    deleteEvent(req, res) {
        console.log('*** deleteEvent');

        eventsRepo.deleteEvent(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteEvent error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteEvent ok');
                res.json({ status: true });
            }
        });
    }
}

module.exports = EventsController;