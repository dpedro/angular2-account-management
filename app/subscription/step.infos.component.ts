import { Component } from 'angular2/core';
import { FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { RouterLink } from 'angular2/router';
import { FormTabsService } from '../blocks/form-tabs/form-tabs';

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
    subscription: SubscriptionService,
    formTabs: FormTabsService
    ) {
      
    this.subscriptionForm = this._formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])
    });
    
    subscription.setTime();
    console.log("SubscriptionClass", subscription.getName(), subscription.time)
    //formTabs.getTabById(0).select();
    formTabs.getTabByName("Tab1").select();
    formTabs.getTabByName("Tab2").unselect();
  }
  
  saveUser() {
    if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
      alert(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
      //this.subscription.name = "bob";
      
      //console.log(this.subscription.name);  
    }
  }
}
