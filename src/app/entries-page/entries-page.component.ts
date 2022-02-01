import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../core/data.service';
import { IBet, IEvent, IGame, IPlayer } from '../shared/interfaces';

@Component({
  selector: 'app-entries-page',
  templateUrl: './entries-page.component.html',
  styleUrls: ['./entries-page.component.scss']
})
export class EntriesPageComponent implements OnInit {
  public selectedValue: IGame
  public games: IGame[] = []
  public event: IEvent
  public players: IPlayer[] = []
  public tablePlayers: IPlayer[] = []
  public gameText: string
  public gameId: string
  public displayedColumns: string[] = ['name', 'record', 'details']
  public form: FormGroup
  public numBets: string
  public isLive: boolean = false

  constructor(
    private formBuilder: FormBuilder, 
    private dataService: DataService,
    private router: Router) { }

  ngOnDestroy(): void {
    //this.dataServiceSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.dataService.getEvents().subscribe((events) => {
      if(events !== null && events.length > 1) {
        let sortedEvents = events.sort((a, b) => {
          return <any>new Date(b.start) - <any>new Date(a.start)
        })
        this.event = sortedEvents[0]
        var today = new Date();
        if ( today > new Date(this.event.start) ) { 
          this.isLive = true
        }
      }
      else if(events.length == 1) {
        this.event = events[0]
      }

      this.dataService.getGames().subscribe((games: IGame[])=>{
        this.games = games;
        console.log(this.games);
      })
    })
    
    this.form = this.formBuilder.group({
      game: [null, Validators.required],
      name: [null, Validators.required],
    });
  }

  selected($event: any): void {
    this.numBets = ""
    this.gameId = this.selectedValue._id
    this.gameText = this.selectedValue.name
    this.dataService.getPlayers().subscribe((players: IPlayer[])=>{
      this.players = players.filter(
        item => item.gameId == this.gameId
      );
      
      this.tablePlayers = []
      this.players.forEach(player => {
        this.dataService.getBets().subscribe((bets: IBet[])=>{
          bets = bets.filter(b => {b.playerId == player._id && b.groupId == this.gameId})
          if (bets != null && bets.length > 0) {
            let done = bets.filter(bet => bet.answer != null && bet.answer != '')
            this.numBets = this.setRemainingBetsText(done, bets)
            let right = done.filter(bet => bet.answer == bet.guess)
            player.record = right.length + "/" + done.length
            this.tablePlayers.push(player)
          }
        })
      })
    })
  }

  setRemainingBetsText(done: any, bets: any): string {
    let numLeft = bets.length - done.length

    if (numLeft == 0)
      return "Game is finished!"
    else if (numLeft == bets.length)
      return "Game hasn't started"
    else
      return numLeft + " Remaining Bets out of " + bets.length
  }

  goTo(player: IPlayer): void {
    this.router.navigate(['/review'], { queryParams: { id: player._id, playerName: player.name, groupId: this.gameId, groupName: this.gameText} });
  }

  new(): void {
    this.router.navigate(['form'])
  }
}
