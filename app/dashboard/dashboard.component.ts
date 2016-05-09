import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {

  constructor(
    private router: Router) { }

  goToSubscription() {
    let link = ['/Subscription'];
    this.router.navigate(link);
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
