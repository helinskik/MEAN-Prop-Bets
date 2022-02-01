const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Game = require('../models/game');

class GamesRepository {

    // get all the Games
    getGames(callback) {
        console.log('*** GamesRepository.getGames');
        Game.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Games count: ${count}`);

            Game.find({}, (err, games) => {
                if (err) { 
                    console.log(`*** GamesRepository.getGames error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    games: games
                });
            });

        });
    }

    getPagedGames(skip, top, callback) {
        console.log('*** GamesRepository.getPagedGames');
        Game.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Games count: ${count}`);

            Game.find({})
                    //.sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, games) => {
                        if (err) { 
                            console.log(`*** GamesRepository.getPagedGames error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            games: games
                        });
                    });

        });
    }

    // get the game summary
    getGamesSummary(skip, top, callback) {
        console.log('*** GamesRepository.getGamesSummary');
        Game.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Games count: ${count}`);

            Game.find({}, { '_id': 0, 'firstName': 1, 'lastName': 1, 'city': 1, 'state': 1, 'orderCount': 1, 'gender': 1 })
                    .skip(skip)
                    .limit(top)
                    .exec((err, gamesSummary) => {
                        callback(null, {
                            count: count,
                            gamesSummary: gamesSummary
                        });
                    });

        });
    }

    // get a  game
    getGame(id, callback) {
        console.log('*** GamesRepository.getgame');
        Game.findById(id, (err, game) => {
            if (err) { 
                console.log(`*** GamesRepository.getgame error: ${err}`); 
                return callback(err); 
            }
            callback(null, game);
        });
    }

    // insert a  game
    insertGame(body, callback) {
        console.log('*** GamesRepository.insertgame');
        var game = new Game();
        console.log(body);

        game.name = body.name;
        game.eventId = body.eventId;

        game.save((err, game) => {
            if (err) { 
                console.log(`*** GamesRepository insertgame error: ${err}`); 
                return callback(err, null); 
            }

            callback(null, game);
        });
    }

    updateGame(id, body, callback) {
        console.log('*** GamesRepository.editgame');

        Game.findById(id, (err, game)  => {
            if (err) { 
                console.log(`*** GamesRepository.editgame error: ${err}`); 
                return callback(err); 
            }

            game.firstName = body.firstName || game.firstName;
            game.lastName = body.lastName || game.lastName;
            game.email = body.email || game.email;
            game.address = body.address || game.address;
            game.city = body.city || game.city;
            game.state = stateObj;
            game.stateId = stateObj.id;
            game.zip = body.zip || game.zip;
            game.gender = body.gender || game.gender;


            game.save((err, game) => {
                if (err) { 
                    console.log(`*** GamesRepository.updategame error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, game);
            });

        });
    }

    // delete a game
    deleteGame(id, callback) {
        console.log('*** GamesRepository.deletegame');
        Game.remove({ '_id': id }, (err, game) => {
            if (err) { 
                console.log(`*** GamesRepository.deletegame error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, game);
        });
    }

}

module.exports = new GamesRepository();