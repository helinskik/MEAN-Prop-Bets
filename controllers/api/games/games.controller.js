const gamesRepo = require('../../../lib/gamesRepository')
      util = require('util');

class GamesController {

    constructor(router) {
        router.get('/', this.getGames.bind(this));
        router.get('/page/:skip/:top', this.getGamesPage.bind(this));
        router.get('/:id', this.getGame.bind(this));
        router.post('/', this.insertGame.bind(this));
        router.put('/:id', this.updateGame.bind(this));
        router.delete('/:id', this.deleteGame.bind(this));
    }

    getGames(req, res) {
        console.log('*** getGames');
        gamesRepo.getGames((err, data) => {
            if (err) {
                console.log('*** getGames error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getGames ok');
                res.json(data.games);
            }
        });
    }

    getGamesPage(req, res) {
        console.log('*** getGamesPage');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

        gamesRepo.getPagedGames(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getGamesPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getGamesPage ok');
                res.json(data.games);
            }
        });
    }

    getGame(req, res) {
        console.log('*** getGame');
        const id = req.params.id;
        console.log(id);

        gamesRepo.getGame(id, (err, game) => {
            if (err) {
                console.log('*** getGame error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getGame ok');
                res.json(game);
            }
        });
    }

    insertGame(req, res) {
        console.log('*** insertGame');
        gamesRepo.insertGame(req.body, (err, game) => {
            if (err) {
                console.log('*** gamesRepo.insertGame error: ' + util.inspect(err));
                res.json({status: false, error: err, game: null});
            } else {
                console.log('*** insertGame ok');
                res.json({ status: true, error: null, game: game });
            }
        });
    }

    updateGame(req, res) {
        console.log('*** updateGame');
        console.log('*** req.body');
        console.log(req.body);

        gamesRepo.updateGame(req.params.id, req.body, (err, game) => {
            if (err) {
                console.log('*** updateGame error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', game: null });
            } else {
                console.log('*** updateGame ok');
                res.json({ status: true, error: null, game: game });
            }
        });
    }

    deleteGame(req, res) {
        console.log('*** deleteGame');

        gamesRepo.deleteGame(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteGame error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteGame ok');
                res.json({ status: true });
            }
        });
    }
}

module.exports = GamesController;