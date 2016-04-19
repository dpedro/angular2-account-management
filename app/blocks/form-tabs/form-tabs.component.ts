import { Component, OnInit } from 'angular2/core';
import { FormTabsService } from './form-tabs.service'

@Component({
  selector: 'toast',
  templateUrl: 'app/blocks/form-tabs/form-tabs.component.html',
  styleUrls: ['app/blocks/form-tabs/form-tabs.component.css'],
  providers: [
    FormTabsService
  ]
})
export class FormTabsComponent {
  step: number;
  tabsService: FormTabsService
  
  constructor(tabsService: FormTabsService) {
    this.step = tabsService.getStep();
  }

}
