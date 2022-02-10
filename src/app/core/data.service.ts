import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IBet, IEvent, IGame, IPlayer, IPagedResults, IBetResponse, IEventResponse, IGameResponse, IPlayerResponse } from '../shared/interfaces';

@Injectable()
export class DataService {
  
    betUrl: string = '/api/bets';
    eventUrl: string = '/api/events';
    gameUrl: string = '/api/games';
    playerUrl: string = '/api/players';
    registerUrl: string = '/api/register';
    headers = new HttpHeaders();
    
    constructor(private http: HttpClient) { 
        this.headers = this.headers.set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }

    getRegisteration(code: any) : Observable<any> {
        
//   const { data } = axios({
//     url: `https://oauth2.googleapis.com/token`,
//     method: 'post',
    var data = {
      client_id: '1011221667530-6e7kha8c8mrbtjetti1jr7fkghrcaarc.apps.googleusercontent.com',//process.env.APP_ID_GOES_HERE,
      client_secret: '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',//process.env.APP_SECRET_GOES_HERE,
      redirect_uri: 'http://localhost:8080/entries',
      grant_type: 'authorization_code',
      code: code
    }
//   });
        return this.http.post(`https://oauth2.googleapis.com/token`, data)
            .pipe(
                   map((token: any) => {
                    //this.calculateBetsOrderTotal(bets);
                       return token;
                   }),
                   catchError(this.handleError)
                );
    }

    getUserInfo(token) : Observable<any> {
        // const { data } = await axios({
        //     url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        //     method: 'get',
        //     headers: {
        //       Authorization: `Bearer ${access_token}`,
        //     },
        //   });
        return this.http.get(`https://www.googleapis.com/oauth2/v2/userinfo`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .pipe(
               map((info: any) => {
                //this.calculateBetsOrderTotal(bets);
                   return info;
               }),
               catchError(this.handleError)
            );
    }
    
    getBets() : Observable<IBet[]> {
        return this.http.get<IBet[]>(this.betUrl, {
            headers: this.headers
         })
            .pipe(
                   map((bets: IBet[]) => {
                    //this.calculateBetsOrderTotal(bets);
                       return bets;
                   }),
                   catchError(this.handleError)
                );
    }

    getBetsPage(page: number, pageSize: number) : Observable<IPagedResults<IBet[]>> {
        return this.http.get<IBet[]>(`${this.betUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
         })
            .pipe(
                    map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let bets = res.body as IBet[];
                        return {
                            results: bets,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }
    
    getBet(id: string) : Observable<IBet> {
        return this.http.get<IBet>(this.betUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    insertBet(bet: IBet) : Observable<IBet> {
        return this.http.post<IBetResponse>(this.betUrl, bet, {
            headers: this.headers
         })
            .pipe(
                   map((data) => {
                       console.log('insert bet status: ' + data.status);
                       return data.bet;
                   }),
                   catchError(this.handleError)
                );
    }
   
    updateBet(bet: IBet) : Observable<IBet> {
        return this.http.put<IBetResponse>(this.betUrl + '/' + bet._id, bet, {
            headers: this.headers
         }) 
            .pipe(
                   map((data) => {
                       console.log('update bet status: ' + data.status);
                       return data.bet;
                   }),
                   catchError(this.handleError)
                );
    }

    deleteBet(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.betUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    getEvents() : Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.eventUrl, {
            headers: this.headers
         })
            .pipe(
                   map((events: IEvent[]) => {
                    //this.calculateBetsOrderTotal(events);
                       return events;
                   }),
                   catchError(this.handleError)
                );
    }

    getEventsPage(page: number, pageSize: number) : Observable<IPagedResults<IEvent[]>> {
        return this.http.get<IEvent[]>(`${this.eventUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
         })
            .pipe(
                    map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let events = res.body as IEvent[];
                        return {
                            results: events,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }
    
    getEvent(id: string) : Observable<IEvent> {
        return this.http.get<IEvent>(this.eventUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    insertEvent(event: IEvent) : Observable<IEvent> {
        return this.http.post<IEventResponse>(this.eventUrl, event, {
            headers: this.headers
         })
            .pipe(
                   map((data) => {
                       console.log('insert event status: ' + data.status);
                       return data.event;
                   }),
                   catchError(this.handleError)
                );
    }
   
    updateEvent(event: IEvent) : Observable<IEvent> {
        return this.http.put<IEventResponse>(this.eventUrl + '/' + event._id, event, {
            headers: this.headers
         }) 
            .pipe(
                   map((data) => {
                       console.log('update event status: ' + data.status);
                       return data.event;
                   }),
                   catchError(this.handleError)
                );
    }

    deleteEvent(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.eventUrl + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    
    getGames() : Observable<IGame[]> {
        return this.http.get<IGame[]>(this.gameUrl, {
            headers: this.headers
         })
            .pipe(
                   map((games: IGame[]) => {
                    //this.calculateBetsOrderTotal(games);
                    return games;
                   }),
                   catchError(this.handleError)
                );
    }

    getGamesPage(page: number, pageSize: number) : Observable<IPagedResults<IGame[]>> {
        return this.http.get<IGame[]>(`${this.gameUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
         })
            .pipe(
                    map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let games = res.body as IGame[];
                        return {
                            results: games,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }
    
    getGame(id: string) : Observable<IGame> {
        return this.http.get<IGame>(this.gameUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    insertGame(game: IGame) : Observable<IGame> {
        return this.http.post<IGameResponse>(this.gameUrl, game, {withCredentials: true})
            .pipe(
                   map((data) => {
                       console.log('insert game status: ' + data.status);
                       return data.game;
                   }),
                   catchError(this.handleError)
                );
    }
   
    updateGame(game: IGame) : Observable<IGame> {
        return this.http.put<IGameResponse>(this.gameUrl + '/' + game._id, game, {
            headers: this.headers
         }) 
            .pipe(
                   map((data) => {
                       console.log('update game status: ' + data.status);
                       return data.game;
                   }),
                   catchError(this.handleError)
                );
    }

    deleteGame(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.gameUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    
    getPlayers() : Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(this.playerUrl, {
            headers: this.headers
         })
            .pipe(
                   map((players: IPlayer[]) => {
                    //this.calculateBetsOrderTotal(players);
                       return players;
                   }),
                   catchError(this.handleError)
                );
    }

    getPlayersPage(page: number, pageSize: number) : Observable<IPagedResults<IPlayer[]>> {
        return this.http.get<IPlayer[]>(`${this.playerUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
         })
            .pipe(
                    map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let players = res.body as IPlayer[];
                        return {
                            results: players,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }
    
    getPlayer(id: string) : Observable<IPlayer> {
        return this.http.get<IPlayer>(this.playerUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    insertPlayer(player: IPlayer) : Observable<IPlayer> {
        return this.http.post<IPlayerResponse>(this.playerUrl, player, {
            headers: this.headers
         })
            .pipe(
                   map((data) => {
                       console.log('insert player status: ' + data.status);
                       return data.player;
                   }),
                   catchError(this.handleError)
                );
    }
   
    updatePlayer(player: IPlayer) : Observable<IPlayer> {
        return this.http.put<IPlayerResponse>(this.playerUrl + '/' + player._id, player, {
            headers: this.headers
         }) 
            .pipe(
                   map((data) => {
                       console.log('update player status: ' + data.status);
                       return data.player;
                   }),
                   catchError(this.handleError)
                );
    }

    deletePlayer(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.playerUrl + '/' + id, {
            headers: this.headers
         })
            .pipe(
                catchError(this.handleError)
            );
    }

    // calculateBetsOrderTotal(bets: IBet[]) {
    //     for (let bet of bets) {
    //         if (bet && bet.orders) {
    //             let total = 0;
    //             for (let order of bet.orders) {
    //                 total += (order.price * order.quantity);
    //             }
    //             bet.orderTotal = total;
    //         }
    //     }
    // }
    
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return throwError(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(error || 'Node.js server error');
    }

}
