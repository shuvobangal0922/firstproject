import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 32: Template reference variable ';
  getValue(item:any){
    console.warn(item);
  }
  
}
