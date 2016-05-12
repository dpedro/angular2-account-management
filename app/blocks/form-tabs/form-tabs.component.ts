import { Component, OnInit, Input  } from '@angular/core';
import { FormTab } from './form-tabs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'form-tabs',
  templateUrl: 'app/blocks/form-tabs/form-tabs.component.html',
  styleUrls: ['app/blocks/form-tabs/form-tabs.component.css'],
  directives: [NgClass]
})
export class FormTabsComponent implements OnInit {
  @Input() tabs: FormTab[];
  
  constructor() {
  }

  ngOnInit() {
    console.log('tabs' + this.tabs);
    
    this.tabs.map(function(tab) {
      console.log(tab);
    })
  }
}
