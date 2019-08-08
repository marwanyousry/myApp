import { RequestType, RequestParams, RequestHelperProvider } from './../../providers/request-helper/request-helper';
import { SpinnerProvider } from './../../providers/spinner/spinner';
import { ObserveProvider } from '../../providers/observe/observe.service';
import { UserProfile } from '../../models/users.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  title: string;
  content: string = 'Ea enim in ipsum nulla ad incididunt aliquip anim Lorem excepteur minim tempor nisi. Laboris Lorem amet sunt ipsum quis fugiat. Veniam ex officia labore quis nisi qui aliquip eu fugiat qui. Anim Lorem est elit enim pariatur sit ullamco aute occaecat enim mollit aliqua adipisicing esse. Irure anim eu laborum enim id consequat esse id consectetur qui ipsum. Reprehenderit minim nulla reprehenderit sunt.'
  image_source: string = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg'
  users: {name: string, age: number, email?:string}[];
  arr: UserProfile[] = [];
  inputValue: string = 'Ahmed';
  class: string = 'bbbb';
  myForm: FormGroup;
  requestParams: RequestParams [] = [];
  constructor(public navCtrl: NavController,
              private observe: ObserveProvider,
              private formBuilder: FormBuilder,
              private spinner: SpinnerProvider,
              private request: RequestHelperProvider) {
    this.title = 'Home Page'
    this.users = [{name: 'Ahmed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Ahmed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Mohamed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Abdullah' , age: 24, email: 'sdafsdfsd'},
    {name: 'Moataz' , age: 24, email: 'sdafsdfsd'}];

    this.arr = [{first_name: '', last_name:'', age:24, email:''}];
    this.myForm = this.formBuilder.group({
      username : ['', Validators.compose([Validators.required])]
    })
  }


  clickFunction = ()=>{
    this.observe.sendStream().subscribe((response: string)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    },()=>{
      console.log('Complete');
    })
  }
  ///https://randomuser.me/api/?results=5000
  callAPI() {
    this.spinner.showSpinner();
    this.requestParams = [{label: 'results', value: 3 }];
    this.request.sendRequest(RequestType.GET,'https://randomuser.me/api/', this.requestParams).subscribe((successResponse :any[])=>{
      console.log(successResponse);  
    //console.log(successResponse.results);
    },(error)=>{
      console.log(error);
      this.spinner.hideSpinner();
    },()=>{
      this.spinner.hideSpinner();
    });

  }

}
