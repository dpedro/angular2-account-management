import { Injectable } from 'angular2/core';

@Injectable()
export class FormTabsService {
  private numStep: number;
  private totalStep: number;
  
  setStep(stepNumber) {
    this.numStep = stepNumber;
  }    
  
  public getStep() {
    return this.numStep;
  }     
  
}

