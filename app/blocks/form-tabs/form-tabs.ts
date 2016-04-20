import { Injectable } from 'angular2/core';

@Injectable()
export class FormTab {
  private numStep;
  private nameStep;
  
  constructor(numStep, nameStep) { 
    this.numStep = numStep;
    this.nameStep = nameStep;
  }
}

@Injectable()
export class FormTabsService {
  private tabs = [];
  //private tabs: FormTab[];
  
  constructor() { 
    //this.tabs = [];
  }
  
  
  addTab(FormTab) {
    this.tabs.push(FormTab);
  }  
  getTabs() {
    return this.tabs;
  }
  /*
  setStep(stepNumber) {
    this.numStep = stepNumber;
  }    
  
  public getStep() {
    return this.numStep;
  }     
  */
}

