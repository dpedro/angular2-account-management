import { Injectable } from 'angular2/core';

@Injectable()
export class SubscriptionService {
  private id: number;
  private name: string;
  public dt: Date = new Date();
  public time: number;
  
  constructor() { 
    //id: number, name: string
    //this.id = id;
    //this.name = name;
    //this.time = this.dt.getTime();
  }
  setTime() {
    this.time = this.dt.getTime();
  }    
  getName() {
    return name;
  }  
    
}
