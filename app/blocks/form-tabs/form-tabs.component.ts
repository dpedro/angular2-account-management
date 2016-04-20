import { Component, OnInit, Input  } from 'angular2/core';
import { FormTab } from './form-tabs';

@Component({
  selector: 'form-tabs',
  templateUrl: 'app/blocks/form-tabs/form-tabs.component.html',
  styleUrls: ['app/blocks/form-tabs/form-tabs.component.css']
})
export class FormTabsComponent implements OnInit {
  @Input() tabs: FormTab[];
  
  constructor() {
  }

  ngOnInit() {
    console.log('tabs' + this.tabs);
  }
}
