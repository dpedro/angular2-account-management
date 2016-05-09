import { Component, provide, OnInit } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router  } from '@angular/router';
import { LocationStrategy, HashLocationStrategy}  from '@angular/common';  

import { DashboardComponent } from './dashboard/dashboard';
import { SubscriptionComponent, SubscriptionService } from './subscription/subscription.export';
import { ExceptionService, FormTabsService } from './blocks/blocks.export';
import { FormService } from './form/form.export';


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
