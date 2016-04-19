import { Component } from 'angular2/core';
import { FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { RouterLink } from 'angular2/router';

@Component({
  selector: 'subscription-form-root',
  templateUrl: './app/subscription/step.recap.component.html',
  directives: [RouterLink]
})

export class RecapComponent { 
  subscription: SubscriptionService;
  //subscription = new Subscription(1 , "Hello, world!");
  
  constructor(
    subscription: SubscriptionService
    ) {

    console.log("SubscriptionClass", subscription.getName(), subscription.time)
    
  }

}
