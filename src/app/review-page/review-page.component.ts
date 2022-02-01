import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { DataService } from '../core/data.service';
import { IBet, IEvent, IGame, IPlayer } from '../shared/interfaces';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  public groupName
  public playerName
  public playerId
  public groupId
  public isDisabled = true
  public results
  guesses: IBet[] = []
  bets: any[]
  statusCode: number
  players:  IPlayer[]
  games:  IGame[]
  public event: IEvent
  public displayedColumns: string[] = ['question', 'guess', 'answer', 'check'];
  //private dataServiceSubscription: Subscription

   constructor(    //private mySqlService: MySqlService, 
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    //this.dataServiceSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.dataService.getEvents().subscribe((events) => {
      if(events !== null) {
        let sortedEvents = events.sort((a, b) => {
          return <any>new Date(a.start) - <any>new Date(b.start)
        })
        this.event = sortedEvents[0]
      }
    })

    this.route
      .queryParams
      .subscribe(params => {
        this.playerId = params['id'];
        this.playerName = params['playerName'];
        this.groupId = params['groupId'];
        this.groupName = params['groupName'];
    });

      this.dataService.getBets().subscribe(bets => {
        this.bets = bets.filter(bet => bet.playerId === this.playerId)

        let rightPicks = this.bets.filter(
          item => item.guess == item.answer
        )
    
        this.results = rightPicks.length + "/" + this.bets.length
      })
  }

  refresh(): void {
    location.reload()
  }

  back(): void {
    this.router.navigate(['entries'])
  }
}
