// Module dependencies
const   mongoose = require('mongoose'),
        Bet = require('../models/bet'),
        Game = require('../models/game'),
        Event = require('../models/event'),
        Player = require('../models/player'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    
    init() {
        mongoose.connection.db.listCollections(
            {name: 'bets'},{name: 'events'},{name: 'games'},{name: 'players'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        //this.seed();
                    }
                });

        // mongoose.connection.db.dropCollection('events', function(err, result) {});
        // mongoose.connection.db.dropCollection('games', function(err, result) {});
        // mongoose.connection.db.dropCollection('players', function(err, result) {});
        // mongoose.connection.db.dropCollection('bets', function(err, result) {});
    }
    
    seed() {

        // console.log('Seeding data....');

        // Bet.remove({});
        // Game.remove({});
        // Event.remove({});
        // Player.remove({});

        // for (i = 0; i < l; i++) {
        //     var customer = new Customer({
        //         'firstName': nameGenderHost[0],
        //         'lastName': nameGenderHost[1],
        //         'email': nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3],
        //         'address': addresses[i],
        //         'city': cityState[0],
        //         'state': state,
        //         'stateId': citiesIds[i],
        //         'zip': zip + i,
        //         'gender': nameGenderHost[2],
        //         'orderCount': 0
        //     });

        //     customer.save((err, cust) => {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log('inserted customer: ' + cust.firstName + ' ' + cust.lastName);
        //         }
        //     });
        // }

        var event = new Event({
            'name': 'Superbowl LVI',
            'start': '2022-02-13 18:00',
            'hasEnded': false
        })
        event.save((err, event) => {
            if (err) {
                console.log(err);
            } else {
                console.log('inserted event: ' + event);
            }
        });

        var event2 = new Event({
            'name': 'Wrestlemania',
            'start': '2022-04-05 03:15',
            'hasEnded': false
        })
        event2.save((err, event) => {
            if (err) {
                console.log(err);
            } else {
                console.log('inserted event: ' + event);
            }
        });
    }
}

module.exports = new DBSeeder();




