import { Component, OnInit, } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder, Validators, AbstractControl, Control } from '@angular/common';
import { ValidationService} from './validation.service';
import { SubscriptionService } from './subscription.service';
import { ROUTER_DIRECTIVES, OnActivate } from '@angular/router';
import { FormTabsService } from '../blocks/form-tabs/form-tabs';
import { FormMeta, Input, FormService } from '../form/form.service';

@Component({
    selector: 'subscription-form-root',
    templateUrl: './app/subscription/step.infos.component.html',
    providers: [FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class StepInfosComponent implements OnInit, OnActivate {
    subscriptionForm: any;
    inputs: Input[];
    metadata: FormMeta[];
    formError: { [id: string]: string };
    private _validationMessages: { [id: string]: { [id: string]: string } };
    
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

        // Initialization of strings
        this.formError = {
            'name': '',
            'email': '',
            'director': ''
        };

        this._validationMessages = {
            'name': {
                'required': 'Movie title is required'
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
        
        this.subscriptionForm = this._formBuilder.group({
            'name': this.nameControl,
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'director': ["",
                Validators.compose([Validators.required,
                Validators.minLength(5),
                Validators.maxLength(50)])]
        });
        
        // This is our new property, which we will access from the template
        this.name = this.subscriptionForm.controls['name'];
        this.email = this.subscriptionForm.controls['email'];
        this.director = this.subscriptionForm.controls['director'];
    
        this.subscriptionForm.valueChanges
            .map(value => {
                //console.log(value);
                //console.log(value.name);
                
                value.name = value.name.toUpperCase();
                return value;
            })
            .subscribe(data => this.onValueChanged(data));
    }
      
    onValueChanged(data: any) {
        // iterate over formError
        for (let field in this.formError) {
            
            // Verify that field property exist in formError
            if (this.formError.hasOwnProperty(field)) {
                
                // Check if the current field is valid
                let hasError = this.subscriptionForm.controls[field].dirty &&
                    !this.subscriptionForm.controls[field].valid;
                
                // reset error message    
                this.formError[field] = '';
               
                if (hasError) {
                    // iterate over field error messages
                    for (let key in this.subscriptionForm.controls[field].errors) {
                        // update array of error
                        if (this.subscriptionForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }
    
    ngOnInit() {
        this.getInputs();
        this.getFormMetada();
    }

    saveUser() {
        console.log("Save user");
        if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
            alert(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
        }
    }
    
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

}
