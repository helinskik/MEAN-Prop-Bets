const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Player = require('../models/player');

class PlayersRepository {

    // get all the Players
    getPlayers(callback) {
        console.log('*** PlayersRepository.getPlayers');
        Player.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Players count: ${count}`);

            Player.find({}, (err, players) => {
                if (err) { 
                    console.log(`*** PlayersRepository.getPlayers error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    players: players
                });
            });

        });
    }

    getPagedPlayers(skip, top, callback) {
        console.log('*** PlayersRepository.getPagedPlayers');
        Player.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Players count: ${count}`);

            Player.find({})
                    //.sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, players) => {
                        if (err) { 
                            console.log(`*** PlayersRepository.getPagedPlayers error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            players: players
                        });
                    });

        });
    }

    // get the player summary
    getPlayersSummary(skip, top, callback) {
        console.log('*** PlayersRepository.getPlayersSummary');
        Player.count((err, custsCount) => {
            let count = custsCount;
            console.log(`Players count: ${count}`);

            Player.find({}, { '_id': 0, 'firstName': 1, 'lastName': 1, 'city': 1, 'state': 1, 'orderCount': 1, 'gender': 1 })
                    .skip(skip)
                    .limit(top)
                    .exec((err, playersSummary) => {
                        callback(null, {
                            count: count,
                            playersSummary: playersSummary
                        });
                    });

        });
    }

    // get a  player
    getPlayer(id, callback) {
        console.log('*** PlayersRepository.getPlayer');
        Player.findById(id, (err, player) => {
            if (err) { 
                console.log(`*** PlayersRepository.getPlayer error: ${err}`); 
                return callback(err); 
            }
            callback(null, player);
        });
    }

    // insert a  player
    insertPlayer(body, callback) {
        console.log('*** PlayersRepository.insertPlayer');
        let player = new Player();
        console.log(body);

        player.email = body.email;
        player.name = body.name;
        player.gameId = body.gameId;
        player.record = body.record;

        player.save((err, player) => {
            if (err) { 
                console.log(`*** PlayersRepository insertplayer error: ${err}`); 
                return callback(err, null); 
            }

            callback(null, player);
        });
    }

    updatePlayer(id, body, callback) {
        console.log('*** PlayersRepository.editplayer');

        Player.findById(id, (err, player)  => {
            if (err) { 
                console.log(`*** PlayersRepository.editplayer error: ${err}`); 
                return callback(err); 
            }

            player.email = body.email || player.email;
            player.name = body.name || player.name;
            player.gameId = body.gameId || player.gameId;
            player.record = body.record || player.record;

            player.save((err, player) => {
                if (err) { 
                    console.log(`*** PlayersRepository.updateplayer error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, player);
            });

        });
    }

    // delete a player
    deletePlayer(id, callback) {
        console.log('*** PlayersRepository.deletePlayer');
        Player.remove({ '_id': id }, (err, player) => {
            if (err) { 
                console.log(`*** PlayersRepository.deleteplayer error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, player);
        });
    }

}

module.exports = new PlayersRepository();