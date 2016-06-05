import { Component, provide, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router  } from '@angular/router';
import { LocationStrategy, HashLocationStrategy}  from '@angular/common';  

import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionService } from './subscription/subscription.service';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ExceptionService } from './blocks/exception.service';
import { FormService } from './form/form.service';


@Component({
  selector: 'subscription-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ExceptionService,
    FormService,
    SubscriptionService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
})
@Routes([
  { path: '/Dashboard', component: DashboardComponent},
  { path: '/Subscription', component: SubscriptionComponent }
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/Dashboard']);
  }
}
