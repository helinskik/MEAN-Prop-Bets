const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  Bet = require("../models/bet");

class BetsRepository {
  // get all the bets
  getBets(callback) {
    console.log("*** BetsRepository.getBets");
    Bet.count((err, custsCount) => {
      let count = custsCount;
      console.log(`Bets count: ${count}`);

      Bet.find({}, (err, bets) => {
        if (err) {
          console.log(`*** BetsRepository.getBets error: ${err}`);
          return callback(err);
        }
        callback(null, {
          count: count,
          bets: bets,
        });
      });
    });
  }

  getPagedBets(skip, top, callback) {
    console.log("*** BetsRepository.getPagedBets");
    Bet.count((err, custsCount) => {
      let count = custsCount;
      console.log(`Skip: ${skip} Top: ${top}`);
      console.log(`Bets count: ${count}`);

      Bet.find({})
        //.sort({lastName: 1})
        .skip(skip)
        .limit(top)
        .exec((err, bets) => {
          if (err) {
            console.log(`*** BetsRepository.getPagedBets error: ${err}`);
            return callback(err);
          }
          callback(null, {
            count: count,
            bets: bets,
          });
        });
    });
  }

  // get the bet summary
  getBetsSummary(skip, top, callback) {
    console.log("*** BetsRepository.getBetsSummary");
    Bet.count((err, custsCount) => {
      let count = custsCount;
      console.log(`Bets count: ${count}`);

      Bet.find(
        {},
        {
          _id: 0,
          firstName: 1,
          lastName: 1,
          city: 1,
          state: 1,
          orderCount: 1,
          gender: 1,
        }
      )
        .skip(skip)
        .limit(top)
        .exec((err, betsSummary) => {
          callback(null, {
            count: count,
            betsSummary: betsSummary,
          });
        });
    });
  }

  // get a  bet
  getBet(id, callback) {
    console.log("*** BetsRepository.getBet");
    Bet.findById(id, (err, bet) => {
      if (err) {
        console.log(`*** BetsRepository.getBet error: ${err}`);
        return callback(err);
      }
      callback(null, bet);
    });
  }

  // insert a  bet
  insertBet(body, callback) {
    console.log("*** BetsRepository.insertBet");
    let bet = new Bet();
    console.log(body);

    bet.question = body.question;
    bet.questionText = body.questionText;
    bet.guess = body.guess;
    bet.answer = body.answer;
    bet.playerId = body.playerId;
    bet.groupId = body.groupId;
    bet.eventId = body.eventId;

    bet.save((err, bet) => {
      if (err) {
        console.log(`*** BetsRepository insertBet error: ${err}`);
        return callback(err, null);
      }

      callback(null, bet);
    });
  }

  updateBet(id, body, callback) {
    console.log("*** BetsRepository.editBet");

    if (body.playerId == 0 && body.groupId == 0) {
      Bet.updateMany(
        { question: body.question },
        { $set: { answer: body.answer } },
        (err, bet) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, bet);
        }
      );
    } else {
      console.log(`*** R2222222: `);
      Bet.find(
        {
          question: body.question,
          playerId: body.playerId,
          groupId: body.groupId,
        },
        (err, bets) => {
          if (err) {
            console.log(`*** BetsRepository.editBet error: ${err}`);
            return callback(err);
          }

          bets.forEach((bet) => {
            bet.question = body.question || bet.question;
            bet.questionText = body.questionText || bet.questionText;
            bet.guess = body.guess || bet.guess;
            bet.answer = body.answer || bet.answer;
            bet.playerId = body.playerId || bet.playerId;
            bet.groupId = body.groupId || bet.groupId;
            bet.eventId = body.eventId || bet.eventId;

            bet.save((err, bet) => {
              if (err) {
                console.log(`*** BetsRepository.updateBet error: ${err}`);
                return callback(err, null);
              }

              callback(null, bet);
            });
          });
        }
      );
    }
  }

  // delete a bet
  deleteBet(id, callback) {
    console.log("*** BetsRepository.deleteBet");
    Bet.remove({ _id: id }, (err, bet) => {
      if (err) {
        console.log(`*** BetsRepository.deleteBet error: ${err}`);
        return callback(err, null);
      }
      callback(null, bet);
    });
  }
}

module.exports = new BetsRepository();
