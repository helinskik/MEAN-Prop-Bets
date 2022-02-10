import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../core/data.service";
import { IBet, IEvent, IGame, IPlayer } from "../../shared/interfaces";

@Component({
  selector: "app-info-dialog",
  templateUrl: "./info-dialog.component.html",
  styleUrls: ["./info-dialog.component.scss"],
})
export class InfoDialogComponent implements OnInit {
  public selectedGame: IGame;
  public selectedEvent: IEvent;
  public form: FormGroup;
  public games: IGame[];
  public events: IEvent[];
  public firstEvent: IEvent;
  public name;
  public gameId;
  public gameText;
  public event: IEvent;
  public playerId;
  public userEmail;
  public userName;
  public playersGames: IPlayer[] = [];
  public existingPlayerId: string = "";

  constructor(
    private dialogRef: MatDialogRef<InfoDialogComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnDestroy(): void {
    //this.dataServiceSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      event: [null, Validators.required],
      game: [null, Validators.required],
      name: [null, Validators.required],
      group: [null],
    });

    this.dataService.getEvents().subscribe((events) => {
      if (events !== null && events.length > 1) {
        this.events = events;
        this.form.get("event").setValue(this.events[0]);
        this.firstEvent = this.event = events.sort((a: IEvent, b: IEvent) => {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        })[0];
      } else if (events !== null && events.length == 1) {
        this.events = events;
        this.form.get("event").setValue(this.events[0]);
        this.event = events[0];
      }
      // else {
      //   let event: IEvent = {
      //     _id: '',
      //     name: 'Superbowl',
      //     start: new Date('2022-03-03 09:15'),
      //     hasEnded: false
      //   }
      //   this.dataService.insertEvent(event).subscribe((event)=>{
      //     this.event = event;
      //   })
      // }

      this.dataService.getGames().subscribe((games) => {
        this.games = games;
      });

      this.form.get("name").setValue(this.userName);
    });
  }

  selecteEvent($event: any): void {
    this.event = this.events.filter((i) => i._id === this.selectedEvent._id)[0];
    //this.dataService.setEvent(this.event)
  }

  selecteGame($event: any): void {
    if (this.selectedGame.toString() == "new") {
      this.gameText = "Create New Group";
    } else {
      let game = this.games.filter((i) => i._id === this.selectedGame._id)[0];
      this.gameId = game._id;
      this.gameText = game.name;
    }
  }

  close() {
    this.dialogRef.close({});
  }

  submit(): void {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    let existingPlayerGame = this.playersGames.find(p => p.email == this.userEmail && p.gameId == this.gameId);

    if (this.form.valid) {
      if (
        this.gameText == "Create New Group" &&
        this.form.value.group == "Submit Picks"
      ) {
        let data = {
          playerId: 0,
          gameId: 0,
          playerName: "",
          gameName: "Submit Picks",
        };
        this.dialogRef.close(data);
      } else if (this.gameText == "Create New Group") {
        let game: IGame = {
          _id: "",
          name: this.form.value.group,
          eventId: this.event._id,
        };
        this.dataService.insertGame(game).subscribe((game: IGame) => {
          console.log("Game created, ", game);
          this.gameId = game._id;
          this.gameText = game.name;

          let player: IPlayer = {
            _id: this.existingPlayerId,
            email: this.userEmail,
            name: this.form.value.name,
            gameId: this.gameId,
          };
          this.dataService.insertPlayer(player).subscribe((player: IPlayer) => {
            console.log("Player created, ", player);
            let data = {
              playerId: player._id,
              playerName: player.name,
              gameId: player.gameId,
              gameName: this.gameText,
              eventId: this.event._id,
              eventName: this.event.name,
              eventDate: this.event.start,
            };
            this.dialogRef.close(data);
          });
        });
      } else {
        if (!existingPlayerGame) {
          let player: IPlayer = {
            _id: this.existingPlayerId,
            email: this.userEmail,
            name: this.form.value.name,
            gameId: this.gameId,
          };
          this.dataService.insertPlayer(player).subscribe((player: IPlayer) => {
            let data = {
              playerId: player._id,
              playerName: player.name,
              gameId: player.gameId,
              gameName: this.gameText,
              eventId: this.event._id,
              eventName: this.event.name,
              eventDate: this.event.start,
            };
            this.dialogRef.close(data);
          });
        }
        else {
          let player: IPlayer = {
            _id: existingPlayerGame._id,
            email: this.userEmail,
            name: this.form.value.name,
            gameId: this.gameId,
          };
          this.dataService.updatePlayer(player).subscribe((player: IPlayer) => {
            let data = {
              playerId: existingPlayerGame._id,
              playerName: player.name,
              gameId: this.gameId,
              gameName: this.gameText,
              eventId: this.event._id,
              eventName: this.event.name,
              eventDate: this.event.start,
              playerAlreadyBet: true
            };
            this.dialogRef.close(data);
          })
        }
      }
    }
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field),
    };
  }
}
