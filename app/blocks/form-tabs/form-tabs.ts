import { Injectable } from 'angular2/core';

@Injectable()
export class FormTab {
  private id;
  private name;
  public selected;
  
  constructor(id, name, selected) { 
    this.id = id;
    this.name = name;
    this.selected = selected;
  }
  
  select() {
    this.selected = true;
  }
  
  unselect() {
    this.selected = false;
  }
}

@Injectable()
export class FormTabsService {
  private tabs = [];
  
  constructor() { }
  
  addTab(FormTab) {
    this.tabs.push(FormTab);
  }  
  
  getTabById(digit) {
    return this.tabs[digit];  
  }
  
  removeTabs() {
    this.tabs = [];
  }
  
  getTabs() {
    return this.tabs;
  }

}

