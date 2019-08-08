
import { AlertHandlerProvider } from './../alert-handler/alert-handler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// tslint:disable-next-line:no-import-side-effect
import 'rxjs/add/operator/timeout';
/*
  Generated class for the RequestHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class RequestParams {
  label: string;
  value: any;
}
export enum RequestType {
  GET = 'GET',
  POST = 'POST'
}



@Injectable()
export class RequestHelperProvider {
  TIMEOUT_DURATION = 45000;
  constructor(
    public http: Http,
    public alertHandler: AlertHandlerProvider
  ) {
    console.log('Hello RequestHelperProvider Provider');
  }

  sendRequest(
    requestType: RequestType,
    serviceUrl: string,
    requestParams?: RequestParams[]
  ): Observable<any> {


      const header = new Headers();
      let getUrlParam = '';
      let bodyParam;
      header.append('Content-Type', 'application/json');
      header.append('Access-Control-Allow-Origin', '*');
      if (requestType === RequestType.GET) {
        if (requestParams) {
          getUrlParam = this.initGetHeader(requestParams);
        }

        console.log('GET Request');
        return this.http
          .get(serviceUrl + getUrlParam, { headers: header })
          .timeout(this.TIMEOUT_DURATION)
          .map(res => res.json())
          .catch((err: Response) => Observable.throw(err.json()));
      } else if (requestType === RequestType.POST) {
        if (requestParams) {
          bodyParam = this.initPostBody(requestParams);
        }

        return this.http
          .post(serviceUrl, bodyParam, { headers: header })
          .timeout(this.TIMEOUT_DURATION)
          .map(res => {
            return res.json();
          })
          .catch(err => {
            const result = err.json();
            console.log('Error Message is : ' + result.Message);
            this.alertHandler.presentToast(result.Message);
            return Observable.throw(err.json());
          });
      } else {
        return null;
      }

  }

  initGetHeader(requestParams?: RequestParams[]): string {
    let requestParamsResult = '?';

    for (let i = 0; i < requestParams.length; i++) {
      if (i === requestParams.length - 1) {
        requestParamsResult += requestParams[i].label + '=' + requestParams[i].value;
      } else {
        requestParamsResult += requestParams[i].label + '=' + requestParams[i].value + '&';
      }
    }
    return requestParamsResult;
  }

  initPostBody(requestParams?: RequestParams[]): any {
    const bodyParam = {};
    for (let i = 0; i < requestParams.length; i++) {
      bodyParam[requestParams[i].label] = requestParams[i].value;
    }
    return JSON.stringify(bodyParam);
  }
}
