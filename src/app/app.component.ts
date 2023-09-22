import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 30: Sending data from child to parent ';
  currentValue="Welcome";
  updateData(name:string ){
    this.currentValue=name;
  }
  
}
