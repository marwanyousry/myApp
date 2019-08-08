import { Component } from '@angular/core';

/**
 * Generated class for the MyComponetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-componet',
  templateUrl: 'my-componet.html'
})
export class MyComponetComponent {

  text: string;

  constructor() {
    console.log('Hello MyComponetComponent Component');
    this.text = 'MyComponetComponent';
  }

}
