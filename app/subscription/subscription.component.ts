import { Component, OnInit} from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
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
  directives: [FormTabsComponent, ROUTER_DIRECTIVES],
  providers: [FormTabsService]
})
@Routes([
  { path: '/infos', component: StepInfosComponent },
  { path: '/recap', component: RecapComponent}
])
export class SubscriptionComponent { 
  tabs: FormTab[];
  
  constructor(
    formTabs: FormTabsService,
    private router: Router
    ) {
    
    if (!formTabs.getTabs().length) {
      formTabs.addTab(new FormTab(0, 'Tab1', false));
      formTabs.addTab(new FormTab(1, 'Tab2', false));
    }
    
    this.tabs = formTabs.getTabs();
  }
  

  ngOnInit() {
    this.router.navigate(['/Subscription/infos']);
  }
}
