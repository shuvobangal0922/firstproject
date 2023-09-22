import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 40: Reactive form';
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  userLogin(){
    console.warn(this.loginForm.value);
    
  }
  
}
