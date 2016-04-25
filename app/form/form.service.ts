import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from '../blocks/blocks.export';
import { CONFIG } from '../shared/shared';

let subscriptionFormUrl = CONFIG.baseUrls.subscriptionForm;

export interface FormMeta {
  id: string;
}

export interface Input {
  id: string;
  type: string;
  label: any;
  validation: any;
}

@Injectable()
export class FormService {
  constructor(private _http: Http,
    private _exceptionService: ExceptionService) {
  }

  getInputs() {
    return this._http.get(subscriptionFormUrl)
      .map((response: Response) =>  <Input[]>response.json().inputs)
      .catch(this._exceptionService.catchBadResponse);
  }
  
  getFormMetadata() {
    return this._http.get(subscriptionFormUrl)
      .map((response: Response) => <FormMeta[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse);
  }

}