import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  memberData=[
    {name:"Shuvo Bangal", email:"shuvo@test.com"},
    {name:"Shyam Chowdhury", email:"shyam@test.com"},
    {name:"Peter Parker", email:"peter@test.com"},
    {name:"Tom Holand", email:"tom@test.com"},
  ]
}
