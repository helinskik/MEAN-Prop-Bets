import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MatRadioChange } from "@angular/material/radio";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { InfoDialogComponent } from "./info-dialog/info-dialog.component";
import { Router } from "@angular/router";
import { DataService } from "../core/data.service";
import { IBet, IEvent, IGame, IPlayer } from "../shared/interfaces";
import * as data from "./bets.json"

@Component({
  selector: "form-page",
  templateUrl: "./form-page.component.html",
  styleUrls: ["./form-page.component.scss"],
})
export class FormPageComponent {
  public sections = [];
  public info:  any  = (data  as  any).default
  public dialogRef;
  public gameName;
  public playerName;
  public playerId: string;
  public groupId : string;
  public eventName;
  public eventId;
  public isDisabled = true;
  public isAdmin = false;
  public newBet = false;
  public eventDate: Date;
  public userInfo;
  public showLoading: boolean = true;
  public showLoadingTest: boolean = true;
  public playersGames: IPlayer[] = [];
  public playerAlreadyBet: boolean = false;
  guesses: IBet[] = [];
  allBets: any[];
  statusCode: number;
  players: IPlayer[];
  games: IGame[];
  selectedPlayers: IPlayer = {
    _id: null,
    email: null,
    name: null,
    gameId: null,
  };
  
  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.dataService.getPlayers().subscribe((players) => {
      this.players = players;

      let um = window.localStorage.getItem("um");
      let un = window.localStorage.getItem("un");
      if (um && un) {
        this.playersGames = this.players.filter((p) => p.email == um);
        this.userInfo = {
          email: um,
          name: un,
        };
        this.makeBet()
      } else {
        this.router.navigate(["register"]);
      }
    });

    var games = new Set(this.info.map((item) => item.section));
    games.forEach((g) =>
      this.sections.push({
        name: g,
        bets: this.info.filter((i) => i.section === g),
      })
    );
  }

  isSpecialBet(bet) {
    if(bet.id == "finalscore" || bet.id == "mvp" || bet.id == "gatorade")
      return false
    else
      return true
  }

  makeBet() {
    setTimeout(()=>{
      this.showLoading = false
      this.openDialog();
      this.newBet = true;
    },1000)
  }

  seeEntries() {
    this.router.navigate(["entries"]);
  }

  radioChange(event: MatRadioChange) {
    var guess = event.value;
    var question = event.source.name;
    var found = false;

    for (var i = 0; i < this.guesses.length; i++) {
      if (this.guesses[i].question == question) {
        this.guesses[i].guess = guess;
        found = true;
        break;
      }
    }

    if (!found) {
      let questionText = this.info.filter((i) => i.id === question)[0].q;
      let newBet: IBet = {
        _id: "0",
        question: question,
        questionText: questionText,
        guess: guess,
        answer: "",
        playerId: this.playerId,
        groupId: this.groupId,
        eventId: this.eventId,
      };
      this.guesses.push(newBet);
    }
    this.isDisabled = false;
    if (this.info.length == this.guesses.length || this.isAdmin) {
      this.isDisabled = false;
    }
  }

  submit(): void {
    this.showLoading = true
    if (this.isAdmin) {
      this.guesses.forEach((guess) => {
        guess.answer = guess.guess;
      });
      this.dataService.updateBet(this.guesses).subscribe((data) => {
        this.dataService.getBets().subscribe((bets) => {
          this.dataService.getPlayers().subscribe((players) => {
            players.forEach(player => {
              let playerbets = bets.filter(bet => bet.playerId === player._id)

              let rightPicks = playerbets.filter(
                item => item.guess == item.answer
              )
              let finishedPicks = playerbets.filter(
                item => item.answer
              )
          
              player.record = rightPicks.length + "/" + finishedPicks.length

              this.dataService.updatePlayer(player).subscribe((player: IPlayer) => {
              });
            })
            this.router.navigate(["entries"]);
          });
        });
      });
    } else {
      if (this.playerAlreadyBet) {
        this.dataService.deleteBet(this.playerId+','+this.groupId+','+this.eventId).subscribe((data) => {
          this.guesses.forEach((guess) => {
            guess.playerId = this.playerId
            guess.groupId = this.groupId
            guess._id = null
          });
          //this.addSpecial()
          this.dataService.insertBet(this.guesses).subscribe((data) => {
            this.router.navigate(["/review"], {
              queryParams: {
                id: this.playerId,
                playerName: this.playerName,
                groupId: this.groupId,
                groupName: this.gameName,
              },
            });
          });
        });
      } else {
        //this.addSpecial()
        this.guesses.forEach((guess) => {
          guess.playerId = this.playerId
          guess.groupId = this.groupId
          guess._id = null
        });
        
        this.dataService.insertBet(this.guesses).subscribe((data) => {
          this.router.navigate(["/review"], {
            queryParams: {
              id: this.playerId,
              playerName: this.playerName,
              groupId: this.groupId,
              groupName: this.gameName,
            },
          });
        });
      }
    }
  }

  addSpecial() {
    this.guesses.push( {
      playerId: this.playerId,
      groupId: this.groupId,
      _id: null,
      question: 'finalscore',
      questionText: 'What is the final score of the game',
      answer: '',
      eventId: this.eventId,
      guess: (<HTMLInputElement>document.getElementById("rams")).value + '-' + (<HTMLInputElement>document.getElementById("bengals")).value
    })
    this.guesses.push( {
      playerId: this.playerId,
      groupId: this.groupId,
      _id: null,
      question: 'mvp',
      questionText: 'MVP',
      answer: '',
      eventId: this.eventId,
      guess: (<HTMLInputElement>document.getElementById("mvp")).value
    })
    this.guesses.push( {
      playerId: this.playerId,
      groupId: this.groupId,
      _id: null,
      question: 'gatorade',
      questionText: 'Color of Gatorade dumped on winning coach',
      answer: '',
      eventId: this.eventId,
      guess: (<HTMLInputElement>document.getElementById("gatorade")).value
    })
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = "backdropBackground";

    this.dialogRef = this.dialog.open(InfoDialogComponent, dialogConfig);
    this.dialogRef.componentInstance.userName = this.userInfo.name;
    this.dialogRef.componentInstance.userEmail = this.userInfo.email;
    this.dialogRef.componentInstance.playersGames = this.playersGames;
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data.gameName != null) {
        this.gameName = data.gameName;
        this.playerName = data.playerName;
        this.groupId = data.gameId;
        this.playerId = data.playerId;
        this.eventName = data.eventName;
        this.eventId = data.eventId;
        this.eventDate = data.eventDate;
        this.playerAlreadyBet = data.playerAlreadyBet;

        if (this.gameName == "Submit Picks") {
          this.isAdmin = true;
          this.isDisabled = false;
        }
      } else {
        this.newBet = false;
      }
    });
  }
}
