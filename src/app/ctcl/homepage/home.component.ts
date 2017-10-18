/* tslint:disable */
import { Component } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Component({
  selector: 'ctcl-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
private ngUnsubscribe: Subject<void> = new Subject<void>();
  points;
  newsList: any;
  groups;
  data: any;
  images: any[];
  images_odd: any[];
  //Default year : 2017
  year: String = '2017';
  constructor(private router: Router, private dashboardService: HomePageService, private clubsService: ClubsService) {

    this.data = {
      datasets: [{
        data: [6, 4, 2, 12],
        backgroundColor: [
          "#ff96ec",
          "#a9c05e",
          "#FFCE56",
          "#8bebed"
        ],
        label: 'My dataset'
      }],
      labels: ['Played', 'Won', 'Lost', 'Total']
    }


  }


  ngOnInit(): void {
    this.points = this.teamsStanding();
    this.groups = this.seasonGroups(this.year);
    this.images = this.dashboardService.getPhoto();
    this.images_odd = this.dashboardService.getPhoto_odd();
    this.ctclNews();

  }

  seasonGroups(year: String) {
    console.info("Fetching results for season groups")
    this.dashboardService.getSeasonGroups(year).then(res => this.groups = res);
    return this.groups;
  }

  teamsStanding() {
    console.info("Fetching results for teams standing :")
    this.dashboardService.getTeamStanding().then(res => this.points = res);
    console.info("Point are back from backend", this.points)
    return this.points;
  }


  ctclNews() {
    console.info("Fetching clubs list: ")
    const types$ = this.clubsService.getCtclNews();
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.newsList = responce,
      (err) => console.error('getCtclNews: Res Error =>', err),
      () => this.ctclNewsReqCompleted());
  }

  ctclNewsReqCompleted() {
    console.log("ctclNews is completed", this.newsList)
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
