import { UserProfile } from './../../models/users.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  content: string = 'Ea enim in ipsum nulla ad incididunt aliquip anim Lorem excepteur minim tempor nisi. Laboris Lorem amet sunt ipsum quis fugiat. Veniam ex officia labore quis nisi qui aliquip eu fugiat qui. Anim Lorem est elit enim pariatur sit ullamco aute occaecat enim mollit aliqua adipisicing esse. Irure anim eu laborum enim id consequat esse id consectetur qui ipsum. Reprehenderit minim nulla reprehenderit sunt.'
  image_source: string = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg'
  users: {name: string, age: number, email?:string}[];
  arr: UserProfile[] = [];
  inputValue: string = 'Ahmed';
  class: string = 'bbbb'
  constructor(public navCtrl: NavController) {
    this.title = 'Home Page'
    this.users = [{name: 'Ahmed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Ahmed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Mohamed' , age: 24, email: 'sdafsdfsd'},
    {name: 'Abdullah' , age: 24, email: 'sdafsdfsd'},
    {name: 'Moataz' , age: 24, email: 'sdafsdfsd'}];

    this.arr = [{first_name: '', last_name:'', age:24, email:''}]
  }


  clickFucntion(){
    alert('11111');
  }

}
