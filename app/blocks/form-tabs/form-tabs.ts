import { Injectable } from '@angular/core';

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
  
  getTabById(id) {
    return this.tabs[id];  
  }
  
  getTabByName(name) {
    
    return this.tabs.find(function(tab) {
      if (tab.name === name) {
        return tab;
      }    
  
    })

  }
    
  removeTabs() {
    this.tabs = [];
  }
  
  getTabs() {
    return this.tabs;
  }

}

