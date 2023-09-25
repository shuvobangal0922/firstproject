import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 40: Reactive form';
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+$')]),
    password:new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  userLogin(){
    console.warn(this.loginForm.value);
    
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
  
