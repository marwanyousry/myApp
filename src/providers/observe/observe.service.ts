import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ObserveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ObserveProvider {

  constructor() {
    console.log('Hello ObserveProvider Provider');
  }

  data_stream: Observable<string>;

  sendStream() :Observable<string>{
    this.data_stream = new Observable( observer =>{
      setTimeout(()=>{
        observer.next('date_stream_1');
      }, 1000),
      setTimeout(()=>{
        observer.error('error');
      }, 3000),
      setTimeout(()=>{
        observer.next('date_stream_3');
      }, 5000),
      setTimeout(()=>{
        observer.complete();
      }, 7000)
      
    });

    return this.data_stream;
  }

}
