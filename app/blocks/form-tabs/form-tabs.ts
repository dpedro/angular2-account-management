import { Injectable } from '@angular/core';

@Injectable()
export class FormTab {
  private id;
  private name;
  public visited;
  public active;
  public disabled;

  constructor(id, name, active, visited, disabled) { 
    this.id = id;
    this.name = name;
    this.visited = visited;
    this.active = active;
    this.disabled = disabled;
  }

  setAsVisited() {
    this.visited = true;
    this.active = false;
    this.disabled = false;
  }
  setAsActive() {
    this.active = true;
    this.visited = true;
    this.disabled = false;
  }
  setAsDisabled() {
    this.disabled = true;
    this.active = false;
    this.visited = false;
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
        console.log("OK3", tab.id);
        console.log("OK3", tab);
        return tab;
      }    
  
    })
    
    
    /*
         return this.tabs.map(function(tab) {
      console.log(tab);
      if (tab.name === name) {
        console.log("OK3");
        return tab;
      }
    })
    
    */
  }
    
  removeTabs() {
    this.tabs = [];
  }
  
  getTabs() {
    return this.tabs;
  }

}

