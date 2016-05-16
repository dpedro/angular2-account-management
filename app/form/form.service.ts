import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AbstractControl, Control, ControlGroup } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from '../blocks/blocks.export';
import { CONFIG } from '../shared/shared';



@Injectable()
export class FormService {
  constructor() {
  }

getFormErrors(form: ControlGroup, validationMessages: Object) {
        var nberrors: number = 0;  
        var errors = [];
        
        // iterate over form controls
        for (let field in form.controls) {
            var fieldName: string;
            var fieldControl: AbstractControl;
            
            // get field name
            fieldName = field.toString();
            fieldControl = form.controls[fieldName];
            
            // Check if the current field is valid
            if (!fieldControl.valid) {
                nberrors++;
                
                // iterate over field error messages
                for (let key in fieldControl.errors) {
                   errors[fieldName] = validationMessages[fieldName][key] + ' ';
                   break;
                }
            }
        }
        
        return {
            "length": nberrors,
            "errors": errors
        };
    }

}