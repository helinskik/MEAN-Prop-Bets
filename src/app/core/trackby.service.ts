import { Injectable } from '@angular/core';

import { IBet, IPlayer, IGame, IEvent } from '../shared/interfaces';

@Injectable()
export class TrackByService {
  
  bet(index: number, bet: IBet) {
    return bet._id;
  }
  
  event(index: number, event: IEvent) {
    return event._id;
  }

  game(index: number, game: IGame) {
    return game._id;
  }

  player(index: number, player: IPlayer) {
    return player._id;
  }
}