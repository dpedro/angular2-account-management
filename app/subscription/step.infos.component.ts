import { Component, OnInit, } from '@angular/core';
import { FORM_PROVIDERS, FormBuilder, Validators} from '@angular/common';
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
        //formTabs.getTabById(0).select();
        _formTabs.getTabByName("Tab1").select();
        _formTabs.getTabByName("Tab2").unselect();
    }

    routerOnActivate(): void {
        console.log("router activated");
        /*
        this.titleControl = new Control(this.movie.title, Validators.compose([Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)]));
        */    
            
        this.subscriptionForm = this._formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'director': ["",
                Validators.compose([Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(50)])]
        });
         /*
        this.editForm = this._fb.group({
            'title': this.titleControl,
            'director': [this.movie.director,
                Validators.compose([Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(50)])],
            'starRating': [this.movie.starRating,
                NumberValidator.range(1, 5)],
            'description': [this.movie.description]
        });*/

        this.subscriptionForm.valueChanges
            .map(value => {
                console.log(value);
                console.log(value.name);
                // Causes infinite loop
                // this.titleControl.updateValue(value.title.toUpperCase());
                
                value.name = value.name.toUpperCase();
                //this.subscriptionForm.controls["name"].updateValue(value.name.toUpperCase());
                return value;
            })
            .subscribe(data => this.onValueChanged(data));
        // this.editForm.valueChanges
        //         .debounceTime(500)
        //         .subscribe(data => this.onValueChanged(data));   
    }

    onValueChanged(data: any) {
        for (let field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                let hasError = this.subscriptionForm.controls[field].dirty &&
                    !this.subscriptionForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (let key in this.subscriptionForm.controls[field].errors) {
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
        if (this.subscriptionForm.dirty && this.subscriptionForm.valid) {
            alert(`Name: ${this.subscriptionForm.value.name} Email: ${this.subscriptionForm.value.email}`);
        }
    }
}
