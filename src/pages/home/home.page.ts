import { Result, MyResultObject, Login } from './../../models/user.interface';


import { RequestType, RequestParams, RequestHelperProvider } from './../../providers/request-helper/request-helper';
import { SpinnerProvider } from './../../providers/spinner/spinner';
import { ObserveProvider } from '../../providers/observe/observe.service';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncryptionProvider } from '../../providers/encryption/encryption';
import { ValidationRules } from '../../helper/ValidationRules';
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  username: string ;
  password: string ;
  requestParams: RequestParams[] = [];

  loginForm: FormGroup;
  constructor(public navCtrl: NavController,
    private observe: ObserveProvider,
    private formBuilder: FormBuilder,
    private event: Events,
    private encrypt: EncryptionProvider,
    private spinner: SpinnerProvider,
    private validation: ValidationRules,
    private request: RequestHelperProvider) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(this.validation.Expression.PASSWORD)])]
    });

  }




  Login() {
    this.spinner.showSpinner();
    this.requestParams = [{ label: 'mobileNo', value: this.loginForm.get('username').value },
    { label: 'Password', value: this.encrypt.encrypt(this.loginForm.get('password').value ) }];
    console.log("TCL: HomePage -> Login -> this.loginForm.get('username').value", this.loginForm.get('username').value)
    this.request.sendRequest(RequestType.POST, 'http://mobile.musa3ed.com/api/Account/Login', this.requestParams).subscribe((res) => {
      console.log("TCL: HomePage -> Login -> res", res)
      this.navCtrl.setRoot("InfoPage", { userId: res.CustomerID })
    }, (error) => {
      this.spinner.hideSpinner()
    }, () => {
      this.spinner.hideSpinner()

    })
  }

}
