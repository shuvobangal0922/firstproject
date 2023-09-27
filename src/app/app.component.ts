import { Component} from '@angular/core';
import {UserDataService} from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture-46: API in Angular';

  usersInfo:any;
  constructor(private userdata:UserDataService){
    userdata.users().subscribe(
      (data:any)=>{
        this.usersInfo=data;
      }
       // console.warn("data", data);
      );
    
    
  }
  
  
 
}
  

