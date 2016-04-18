import { Component, OnInit, Input } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { StepInfosComponent } from './step.infos.component';
import { RecapComponent } from './step.recap.component';
//import { Subscription } from './subscription';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'subscription-form-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/infos/', name: 'StepInfos', component: StepInfosComponent, useAsDefault: true },
  { path: '/recap/', name: 'StepRecap', component: RecapComponent},
  /*{ path: '../Dashboard', name: 'Dashboard', component: DashboardComponent },*/
  { path: '/Dashboard', name: 'Dashboard', component: DashboardComponent }
])
export class SubscriptionComponent { 
  
    //@Input() subscription: Subscription;
  
    //subscription = new Subscription(1 , "test");
    //@Input() greeter = new Subscription(1 , "Hello, world!");
}
