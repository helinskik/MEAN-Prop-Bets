import { Component, OnInit } from '@angular/core'
import { MatRadioChange } from '@angular/material/radio'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { InfoDialogComponent } from './info-dialog/info-dialog.component'
import { Router } from '@angular/router'
import { DataService } from '../core/data.service';
import { IBet, IEvent, IGame, IPlayer } from '../shared/interfaces';

@Component({
  selector: 'form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  public sections = []
  public info = {
    bets: [
        {
          id: "anthem",
          section: "Time",
          q: "2:00 (min:sec) Demi Lovato anthem length",
          a1: "Over",
          a2: "Under"
        },
        {
          id: "halftime",
          section: "Time",
          q: "32:00 (min:sec) Halftime length",
          a1: "Over",
          a2: "Under"
        },
        {
          id: "gametime",
          section: "Time",
          q: "3:34 (hr:min) Game time length",
          a1: "Over",
          a2: "Under"
        },
        {
          id: "coin",
          section: "Coin Toss",
          q: "Heads or Tails",
          a1: "Heads",
          a2: "Tails"
        },
        {
          id: "coinwinner",
          section: "Coin Toss",
          q: "Winner of coin toss",
          a1: "SF",
          a2: "KC"
        }
      ]
    }
  public dialogRef
  public gameName
  public playerName
  public playerId
  public groupId
  public isDisabled = true
  public isAdmin = false
  public newBet = false
  public event: IEvent
  public eventDate: Date
  guesses: IBet[] = []
  allBets: any[]
  statusCode: number
  players:  IPlayer[]
  games:  IGame[]
  selectedPlayers:  IPlayer  = { _id :  null , name:null, gameId:  null}
  //private dataServiceSubscription: Subscription

  constructor(private dialog: MatDialog,
    private dataService: DataService,
    private router: Router, ) { }

  ngOnDestroy(): void {
    //this.dataServiceSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.dataService.getEvents().subscribe((events) => {
      if(events !== null && events.length > 0) {
        // this.event = events.sort((a: IEvent, b: IEvent) => {
        //   return a.start.getTime() - b.start.getTime()
        // })[0]
        //this.dataService.setEvent(this.event)
        this.event = events[0]
        var today = new Date();
        this.eventDate = new Date(this.event.start)
        if ( today > this.eventDate ) { 
          this.router.navigate(['entries'])
        }
        else {
          var games = new Set(this.info.bets.map(item => item.section))
          games.forEach(g => 
            this.sections.push({
              name: g, 
              bets: this.info.bets.filter(i => i.section === g)
            }
          )) 
          
          this.dataService.getPlayers().subscribe((players: IPlayer[])=>{
            this.players = players;
            //console.log(this.players);
          })
        }
      }
    })

    this.makeBet()
  }

  makeBet() {
    this.openDialog()
    this.newBet = true
  }

  seeEntries() {
    this.router.navigate(['entries'])
  }

  radioChange(event: MatRadioChange) {
    var guess = event.value
    var question = event.source.name
    var found = false

    for(var i=0; i < this.guesses.length; i++) { 
      if (this.guesses[i].question == question) {
        this.guesses[i].guess = guess
        found = true
        break
      }
    }

    if(!found) {
      let questionText = this.info.bets.filter(i => i.id === question)[0].q
      let newBet: IBet = { _id: "0", question: question, questionText: questionText, guess: guess, answer: '', playerId: this.playerId, groupId: this.groupId, eventId: this.event._id}
      this.guesses.push(newBet)
    }

    if (this.info.bets.length == this.guesses.length || this.isAdmin) {
      this.isDisabled = false
    }
  }

  submit(): void {
    if (this.isAdmin)
    {
      this.guesses.forEach(guess => {
        guess.answer = guess.guess
        this.dataService.updateBet(guess).subscribe((bet: IBet)=>{
          console.log("Player bet, ", bet);
        }); 
      });

      this.router.navigate(['entries'])
    }
    else {
      this.guesses.forEach(guess => {
        guess.playerId = this.playerId
        guess.groupId = this.groupId
        this.dataService.insertBet(guess).subscribe((bet: IBet)=>{
          console.log("Player bet, ", bet);
        }); 
      });

      this.router.navigate(['entries'])
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'backdropBackground';

    this.dialogRef = this.dialog.open(InfoDialogComponent, dialogConfig);
    
    this.dialogRef.afterClosed().subscribe(
      data => {
        if (data.gameName != null) {
          this.gameName = data.gameName
          this.playerName = data.playerName
          this.groupId = data.gameId
          this.playerId = data.playerId

          if(this.gameName == "Submit Picks") {
            this.isAdmin = true
            this.isDisabled = false
          }
        }
        else 
        {
          this.newBet = false
        }
      }
    );
  }
}
