import { Component, OnInit, } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder, Validators, AbstractControl, Control, ControlGroup } from '@angular/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { ROUTER_DIRECTIVES, OnActivate } from '@angular/router';
import { FormTabsService } from '../blocks/form-tabs/form-tabs';
//import { FormMeta, Input, FormService } from '../form/form.service';
import { FormService } from '../form/form.service';

import { SUBSCRIPTION_CONFIG } from './subscription.config';



@Component({
    selector: 'subscription-form-root',
    templateUrl: './app/subscription/step.infos.component.html',
    providers: [FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class StepInfosComponent implements OnInit, OnActivate {
    subscriptionForm: ControlGroup;
    //inputs: Input[];
    //metadata: FormMeta[];
    private _validationMessages: { [id: string]: { [id: string]: string } };
    showErrors: Boolean = false;
    //let subscriptionFormUrl = CONFIG.baseUrls.subscriptionForm;
    
    // Form controls
    name: AbstractControl;
    nameControl: Control;
    email: AbstractControl;
    director: AbstractControl;
     
    constructor(
        private _formBuilder: FormBuilder,
        private _formService: FormService,
        private _subscription: SubscriptionService,
        private _formTabs: FormTabsService
    ) {

        this.showErrors = false;  
        
        // Initialization of strings

        this._validationMessages = {
            'name': {
                'required': 'Name is required'
            },
            'email': {
               'required': 'email is required',
               'invalidEmailAddress': 'invalidEmailAddress'
            },
            'director': {
                'required': 'Director is required',
                'minlength': 'Director must be at least 5 characters.',
                'maxlength': 'Director cannot exceed 50 characters.'
            }
        };

        _subscription.setTime();
        console.log("SubscriptionClass", _subscription.getName(), _subscription.time)
        _formTabs.getTabByName('Etape 1').setAsActive();
        _formTabs.getTabByName('Validation').setAsDisabled();
    }
    
    routerOnActivate(): void {
        
        this.nameControl = new Control('', Validators.compose([Validators.required]));
        
        // Validation by priority
        this.subscriptionForm = this._formBuilder.group({
            'name': this.nameControl,
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'director': ["",
                Validators.compose([Validators.required,
                Validators.minLength(5),
                Validators.maxLength(50)])]
        });
        
        console.log(this.subscriptionForm.controls);
        
        // This is our new property, which we will access from the template
        this.name = this.subscriptionForm.controls['name'];
        this.email = this.subscriptionForm.controls['email'];
        this.director = this.subscriptionForm.controls['director'];

    }
    
    
    

   /**
   * @brief      Vérifie si un control est valide
   *
   * @param      { AbstractControl } control - La référence vers le control
   *
   * @return     Indique si le control est en erreur
   */
  private isControlInvalid(control) {
    let invalidControl: Boolean = false;

    if (!control.valid && this.showErrors) {
      invalidControl = true;
    } 

     return invalidControl;    
  }
  
    ngOnInit() {
        //this.getInputs();
        //this.getFormMetada();
    }

    formErrors = [];
    
    getControlError(controlName:string) {
        var error:string = "";
        if (this.formErrors.hasOwnProperty(controlName)) {
            error = this.formErrors[controlName];
        }
        return error;
    }
    validateForm() {
        console.log("Save user");
        this.formErrors = this._formService.getFormErrors(this.subscriptionForm, this._validationMessages).errors; 
        console.log(this.formErrors);
        this.showErrors = true;
        // scroll to top
        scroll(0,0);
        console.log(this.showErrors);
    
        if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
            console.log(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
        }
    }
    
    /*
    getInputs() {
        this.inputs = [];

        this._formService.getInputs()
            .subscribe(inputs => {
                this.inputs = inputs;
                console.log("inputs", this.inputs);
            });
    }
    getFormMetada() {
        this.inputs = [];

        this._formService.getFormMetadata()
            .subscribe(metadata => {
                this.metadata = metadata;
                console.log("Metadata", this.inputs);
            });
    }
    */
}
