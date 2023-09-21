import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 29: Reusable component ';

  userDetails=[
    {name:'Shuvo Bangal', email:'shuvo@test.com'},
    {name:'Shyamapada Chowdhury', email:'shyam@test.com'},
    {name:'Pritam Chanda', email:'pritam@test.com'},
    {name:'nitish kumar', email:'nitish@test.com'},
  ];
 
  
}
