const playersRepo = require('../../../lib/playersRepository')
      util = require('util');

class PlayersController {

    constructor(router) {
        router.get('/', this.getPlayers.bind(this));
        router.get('/page/:skip/:top', this.getPlayersPage.bind(this));
        router.get('/:id', this.getPlayer.bind(this));
        router.post('/', this.insertPlayer.bind(this));
        router.put('/:id', this.updatePlayer.bind(this));
        router.delete('/:id', this.deletePlayer.bind(this));
    }

    getPlayers(req, res) {
        console.log('*** getPlayers');
        playersRepo.getPlayers((err, data) => {
            if (err) {
                console.log('*** getPlayers error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getPlayers ok');
                res.json(data.players);
            }
        });
    }

    getPlayersPage(req, res) {
        console.log('*** getPlayersPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        playersRepo.getPagedPlayers(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getPlayersPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getPlayersPage ok');
                res.json(data.players);
            }
        });
    }

    getPlayer(req, res) {
        console.log('*** getPlayer');
        const id = req.params.id;
        console.log(id);

        playersRepo.getPlayer(id, (err, player) => {
            if (err) {
                console.log('*** getPlayer error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getPlayer ok');
                res.json(player);
            }
        });
    }

    insertPlayer(req, res) {
        console.log('*** insertPlayer');
        playersRepo.insertPlayer(req.body, (err, player) => {
            if (err) {
                console.log('*** playersRepo.insertPlayer error: ' + util.inspect(err));
                res.json({status: false, error: 'Insert failed', player: null});
            } else {
                console.log('*** insertPlayer ok');
                res.json({ status: true, error: null, player: player });
            }
        });
    }

    updatePlayer(req, res) {
        console.log('*** updatePlayer');
        console.log('*** req.body');
        console.log(req.body);

        playersRepo.updatePlayer(req.params.id, req.body, (err, player) => {
            if (err) {
                console.log('*** updatePlayer error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', player: null });
            } else {
                console.log('*** updatePlayer ok');
                res.json({ status: true, error: null, player: player });
            }
        });
    }

    deletePlayer(req, res) {
        console.log('*** deletePlayer');

        playersRepo.deletePlayer(req.params.id, (err) => {
            if (err) {
                console.log('*** deletePlayer error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deletePlayer ok');
                res.json({ status: true });
            }
        });
    }
}

module.exports = PlayersController;