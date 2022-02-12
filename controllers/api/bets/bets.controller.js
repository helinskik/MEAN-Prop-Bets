const betsRepo = require('../../../lib/betsRepository')
      util = require('util');

class BetsController {

    constructor(router) {
        router.get('/', this.getBets.bind(this));
        router.get('/page/:skip/:top', this.getBetsPage.bind(this));
        router.get('/:id', this.getBet.bind(this));
        router.post('/', this.insertBet.bind(this));
        router.put('/:id', this.updateBet.bind(this));
        router.delete('/:id', this.deleteBet.bind(this));
    }

    getBets(req, res) {
        console.log('*** getBets');
        betsRepo.getBets((err, data) => {
            if (err) {
                console.log('*** getBets error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getBets ok');
                res.json(data.bets);
            }
        });
    }

    getBetsPage(req, res) {
        console.log('*** getBetsPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        betsRepo.getPagedBets(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getBetsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getBetsPage ok');
                res.json(data.bets);
            }
        });
    }

    getBet(req, res) {
        console.log('*** getBet');
        const id = req.params.id;
        console.log(id);

        betsRepo.getBet(id, (err, bet) => {
            if (err) {
                console.log('*** getBet error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getBet ok');
                res.json(bet);
            }
        });
    }

    insertBet(req, res) {
        console.log('*** insertBet');
        betsRepo.insertBet(req.body, (err, bet) => {
            if (err) {
                console.log('*** betsRepo.insertBet error: ' + util.inspect(err));
                res.json({status: false, error: 'Insert failed', bet: null});
            } else {
                console.log('*** insertBet ok');
                res.json({ status: true, error: null, bet: bet });
            }
        });
    }

    updateBet(req, res) {
        console.log('*** updateBet');
        console.log('*** req.body');
        console.log(req.body);

        betsRepo.updateBet(req.body, (err, bet) => {
            if (err) {
                console.log('*** updateBet error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', bet: null });
            } else {
                console.log('*** updateBet ok');
                res.json({ status: true, error: null, bet: bet });
            }
        });
    }

    deleteBet(req, res) {
        console.log('*** deleteBet');

        betsRepo.deleteBet(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteBet error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteBet ok');
                res.json({ status: true });
            }
        });
    }
}

module.exports = BetsController;