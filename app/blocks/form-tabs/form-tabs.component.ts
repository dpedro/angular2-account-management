import { Component, Input  } from '@angular/core';
import { FormTab } from './form-tabs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'form-tabs',
  templateUrl: 'app/blocks/form-tabs/form-tabs.component.html',
  styleUrls: ['app/blocks/form-tabs/form-tabs.component.css'],
  directives: [NgClass]
})
export class FormTabsComponent {
  @Input() tabs: FormTab[];
  
  constructor() {}
}
