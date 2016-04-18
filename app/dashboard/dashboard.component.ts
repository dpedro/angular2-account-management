import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouterLink } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: [RouterLink]
})
export class DashboardComponent implements OnDestroy, OnInit {

  constructor(
    private _router: Router) { }

  goToSubscription() {
    let link = ['/Subscription'];
    this._router.navigate(link);
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
