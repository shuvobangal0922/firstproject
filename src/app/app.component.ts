import { Component} from '@angular/core';
import { UserdataService } from "./services/userdata.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture-46: Services in Angular';
  users:any;
  constructor(private userData:UserdataService){
    this.users=userData.users();
  }
  
 
}
  

