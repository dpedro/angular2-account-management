import { Component } from 'angular2/core';
import { FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { RouterLink } from 'angular2/router';

@Component({
  selector: 'subscription-form-root',
  templateUrl: './app/subscription/step.infos.component.html',
  providers: [FORM_PROVIDERS],
  directives: [RouterLink]
})

export class StepInfosComponent { 
  subscriptionForm: any;
  //subscription: Subscription;
  //subscription = new Subscription();

  
  constructor(
    private _formBuilder: FormBuilder,
    subscription: SubscriptionService
    ) {
      
    this.subscriptionForm = this._formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])
    });
    
    subscription.setTime();
    console.log("SubscriptionClass", subscription.getName(), subscription.time)
    
  }
  
  saveUser() {
    if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
      alert(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
      //this.subscription.name = "bob";
      
      //console.log(this.subscription.name);  
    }
  }
}
