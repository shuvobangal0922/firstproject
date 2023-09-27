import { Component} from '@angular/core';
import {UserDataService} from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture-46: post API method';

  usersInfo:any;
  constructor(private userdata:UserDataService){
    userdata.users().subscribe(
      (data:any)=>{
        this.usersInfo=data;
      }
       // console.warn("data", data);
      );
    
    
  }

  getUserFormData(data:any){
    
    this.userdata.saveUsers(data).subscribe(
      (result)=>{
        console.warn(result);
        
      }

    )
    
  }
  
  
 
}
  

