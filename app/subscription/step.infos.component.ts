import { Component, OnInit, } from 'angular2/core';
import { FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { RouterLink } from 'angular2/router';
import { FormTabsService } from '../blocks/form-tabs/form-tabs';
import { FormMeta, Input, FormService } from '../form/form.service';

@Component({
  selector: 'subscription-form-root',
  templateUrl: './app/subscription/step.infos.component.html',
  providers: [FORM_PROVIDERS],
  directives: [RouterLink]
})

export class StepInfosComponent implements OnInit { 
  subscriptionForm: any;
  inputs: Input[];
  metadata: FormMeta[];
  
  getInputs() {
    this.inputs = [];

    this._formService.getInputs()
      .subscribe(inputs => {
        this.inputs = inputs;
        console.log(this.inputs);
      });
  }
  getFormMetada() {
    this.inputs = [];

    this._formService.getFormMetadata()
      .subscribe(metadata => {
        this.metadata = metadata;
        console.log(this.inputs);
      });
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormService,
    private _subscription: SubscriptionService,
    private _formTabs: FormTabsService
    ) {
      
    this.subscriptionForm = this._formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])
    });
    
    _subscription.setTime();
    console.log("SubscriptionClass", _subscription.getName(), _subscription.time)
    //formTabs.getTabById(0).select();
    _formTabs.getTabByName("Tab1").select();
    _formTabs.getTabByName("Tab2").unselect();
  }
  
  ngOnInit() {
    this.getInputs();
    this.getFormMetada();
  }
  
  saveUser() {
    if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
      alert(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
    }
  }
}
