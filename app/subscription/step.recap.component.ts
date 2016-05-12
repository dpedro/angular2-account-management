import { Component } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder, Validators } from '@angular/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
//import { RouterLink } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormTabsService } from '../blocks/form-tabs/form-tabs';

@Component({
  selector: 'subscription-form-root',
  templateUrl: './app/subscription/step.recap.component.html',
  directives: [ROUTER_DIRECTIVES] /*,
  directives: [RouterLink]*/
})

export class RecapComponent { 
  subscription: SubscriptionService;
  //subscription = new Subscription(1 , "Hello, world!");
  
  constructor(
    subscription: SubscriptionService,
    formTabs: FormTabsService
    ) {

    console.log("SubscriptionClass", subscription.getName(), subscription.time)


    formTabs.getTabByName('Etape 1').setAsVisited();
    formTabs.getTabByName('Validation').setAsActive();
  }

}
