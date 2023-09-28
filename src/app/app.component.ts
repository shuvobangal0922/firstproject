import { Component} from '@angular/core';
import {dataType} from './user-datatype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture-54: Group Routing';
  
  getData(){
    const data:dataType={
      name: "Shuvo Bangal",
      indian: true,
      age: 0,
      address:"BC-150, kestopur"
    };
    return data;
  }
 
}
  

