import { Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { StepInfosComponent } from './step.infos.component';
import { RecapComponent } from './step.recap.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormTab, FormTabsService } from '../blocks/form-tabs/form-tabs';
import { FormTabsComponent } from '../blocks/form-tabs/form-tabs.component';

@Component({
  selector: 'subscription-form-root',
  template: `
    <form-tabs [tabs]="tabs"></form-tabs>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, FormTabsComponent],
  providers: [FormTabsService]
})
@RouteConfig([
  { path: '/infos/', name: 'StepInfos', component: StepInfosComponent, useAsDefault: true },
  { path: '/recap/', name: 'StepRecap', component: RecapComponent}
])
export class SubscriptionComponent { 
  tabs: FormTab[];
  
  constructor(
    formTabs: FormTabsService
    ) {

    console.log("constuctor", formTabs.getTabs().length);  
    
    if (!formTabs.getTabs().length) {
      formTabs.addTab(new FormTab(1, 'Tab1', false));
      formTabs.addTab(new FormTab(1, 'Tab2', false));
    }
    
    this.tabs = formTabs.getTabs();
  }
  
}
