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
    // console.log("*** BetsRepository.insertBet");
    // let bet = new Bet();
    // console.log(body);

    // bet.question = body.question;
    // bet.questionText = body.questionText;
    // bet.guess = body.guess;
    // bet.answer = body.answer;
    // bet.playerId = body.playerId;
    // bet.groupId = body.groupId;
    // bet.eventId = body.eventId;

    Bet.insertMany(body,
      (err, bet) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, bet);
      })
    // bet.save((err, bet) => {
    //   if (err) {
    //     console.log(`*** BetsRepository insertBet error: ${err}`);
    //     return callback(err, null);
    //   }

    //   callback(null, bet);
    // });
  }

  updateBet(body, callback) {
    console.log("*** BetsRepository.editBet " + body);
    console.log("*** BetsRepository.editBet " + body.toString());
    if (body[0].playerId == 0 && body[0].groupId == 0) {
      body.forEach(bet => {
      Bet.updateMany(
        { question: bet.question },
        { $set: { answer: bet.answer } },
        (err, bet) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, bet);
        }
      );
      })
    } else {
      console.log(`*** R2222222: ` + body.question + " " + body[0].question);

      Bet.updateMany(
        { question: body.question, playerId: body.playerId, groupId: body.groupId, eventId: body.eventId },
        { $set: { guess: body.guess } },
        (err, bet) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, bet);
        }
      );
      // Bet.find(
      //   {
      //     question: body.question,
      //     playerId: body.playerId,
      //     groupId: body.groupId,
      //   },
      //   (err, bets) => {
      //     if (err) {
      //       console.log(`*** BetsRepository.editBet error: ${err}`);
      //       return callback(err);
      //     }

      //     bets.forEach((bet) => {
      //       bet.question = body.question || bet.question;
      //       bet.questionText = body.questionText || bet.questionText;
      //       bet.guess = body.guess || bet.guess;
      //       bet.answer = body.answer || bet.answer;
      //       bet.playerId = body.playerId || bet.playerId;
      //       bet.groupId = body.groupId || bet.groupId;
      //       bet.eventId = body.eventId || bet.eventId;

      //       bet.save((err, bet) => {
      //         if (err) {
      //           console.log(`*** BetsRepository.updateBet error: ${err}`);
      //           return callback(err, null);
      //         }

      //         callback(null, bet);
      //       });
      //     });
      //  }
      //);
    }
  }

  // delete a bet
  deleteBet(id, callback) {
    console.log("*** BetsRepository.deleteBet");
    let info = id.split(',')
    let playerId = info[0]
    let groupId = info[1]
    let eventId = info[2]
    console.log("*** BetsRepository.deleteBet  " + info);
    Bet.deleteMany({ playerId: playerId, groupId: groupId, eventId: eventId }, (err, bet) => {
      if (err) {
        console.log(`*** BetsRepository.deleteBet error: ${err}`);
        return callback(err, null);
      }
      callback(null, bet);
    });
  }
}

module.exports = new BetsRepository();
