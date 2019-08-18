import { Result, MyResultObject, Login } from './../../models/user.interface';


import { RequestType, RequestParams, RequestHelperProvider } from './../../providers/request-helper/request-helper';
import { SpinnerProvider } from './../../providers/spinner/spinner';
import { ObserveProvider } from '../../providers/observe/observe.service';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  users_results: Result[];
  title: string;
  content: string = 'Ea enim in ipsum nulla ad incididunt aliquip anim Lorem excepteur minim tempor nisi. Laboris Lorem amet sunt ipsum quis fugiat. Veniam ex officia labore quis nisi qui aliquip eu fugiat qui. Anim Lorem est elit enim pariatur sit ullamco aute occaecat enim mollit aliqua adipisicing esse. Irure anim eu laborum enim id consequat esse id consectetur qui ipsum. Reprehenderit minim nulla reprehenderit sunt.'
  image_source: string = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg'
  users: { name: string, age: number, email?: string, active: boolean }[];

  inputValue: string = 'Ahmed';
  class: string = 'bbbb';
  myForm: FormGroup;
  requestParams: RequestParams[] = [];
  count: number = 1;

  myArr: { label: string, active: boolean }[] = [];
  aboutPage: any = AboutPage;
  activeClass: string = 'active';
  constructor(public navCtrl: NavController,
    private observe: ObserveProvider,
    private formBuilder: FormBuilder,
    private event: Events,
    private spinner: SpinnerProvider,
    private request: RequestHelperProvider) {
    this.event.subscribe('aaaa', (val) => {
      console.log('my val is ' + val);
    })
    this.title = 'Home Page'
    this.users = [{ name: 'Ahmed', age: 24, email: 'sdafsdfsd', active: false },
    { name: 'Ahmed', age: 24, email: 'sdafsdfsd', active: false },
    { name: 'Mohamed', age: 24, email: 'sdafsdfsd', active: true },
    { name: 'Abdullah', age: 24, email: 'sdafsdfsd', active: false },
    { name: 'Moataz', age: 24, email: 'sdafsdfsd', active: true }];

    // this.arr = [{ first_name: '', last_name: '', age: 24, email: '' }];
    // this.myForm = this.formBuilder.group({
    //   username: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern()])]
    // })
  }


  clickFunction() {
    this.observe.sendStream().subscribe((response: string) => {
      console.log("aaaaa : "+ response);
      console.log(`aaaa ${response}`)
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Complete');
    })
  }
  ///https://randomuser.me/api/?results=3&gender=female
  callAPI() {
    this.spinner.showSpinner();
    this.requestParams = [{ label: 'results', value: 9 },
    { label: 'gender', value: 'female' }];
    this.request.sendRequest(RequestType.GET, 'https://randomuser.me/api/', this.requestParams).subscribe((successResponse: MyResultObject) => {
      this.users_results = successResponse.results;
      console.log("TCL: HomePage -> callAPI -> this.users_results", this.users_results)

    }, (error) => {
      console.log(error);
      this.spinner.hideSpinner();
    }, () => {
      this.spinner.hideSpinner();
    });

  }

  select(user) {
    user.active = !user.active;
  }

  publish() {
    this.event.publish("EVENT", this.count++);
  }

  Login(username: string, password: string) {
    this.spinner.showSpinner();
    this.requestParams = [{ label: 'mobileNo', value: username },
    { label: 'Password', value: password }];
    this.request.sendRequest(RequestType.POST, 'http://mobile.musa3ed.com/api/Account/Login', this.requestParams).subscribe((res) => {
    console.log("TCL: HomePage -> Login -> res", res)
      
    }, (error) => {
      this.spinner.hideSpinner()
    }, () => {
      this.spinner.hideSpinner()

    })
  }

}
