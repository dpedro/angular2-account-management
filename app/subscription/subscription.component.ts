import { Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { StepInfosComponent } from './step.infos.component';
import { RecapComponent } from './step.recap.component';
//import { Subscription } from './subscription';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormTab, FormTabsService } from '../blocks/form-tabs/form-tabs';
import { FormTabsComponent } from '../blocks/form-tabs/form-tabs.component';

@Component({
  selector: 'subscription-form-root',
  template: `
    <form-tabs [tabs]="tabs"></form-tabs>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, FormTabsComponent]
})
@RouteConfig([
  { path: '/infos/', name: 'StepInfos', component: StepInfosComponent, useAsDefault: true },
  { path: '/recap/', name: 'StepRecap', component: RecapComponent},
  /*{ path: '../Dashboard', name: 'Dashboard', component: DashboardComponent },*/
  { path: '/Dashboard', name: 'Dashboard', component: DashboardComponent }
])
export class SubscriptionComponent { 
  //formTabs = new FormTabs();
  
  //formTabs.add(new FormTab(1, 'Tab1'));
  


  tabs: FormTab[];
  //subscription = new Subscription(1 , "Hello, world!");
  
  constructor(
    formTabs: FormTabsService
    ) {

    formTabs.addTab(new FormTab(1, 'Tab1'));
    formTabs.addTab(new FormTab(1, 'Tab2'));
    this.tabs = formTabs.getTabs();
    /*
    tabs = [
      new FormTabs(1, 'Tab1'),
      new FormTabs(2, 'Tab2'),
      new FormTabs(3, 'Tab3'),
      new FormTabs(4, 'Tab4')
    ];
    */
    //console.log("SubscriptionClass", subscription.getName(), subscription.time)
    
  }
  
  
    //@Input() subscription: Subscription;
  
    //subscription = new Subscription(1 , "test");
    //@Input() greeter = new Subscription(1 , "Hello, world!");
}
