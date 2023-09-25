import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{


  userId: any|null|undefined;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
      this.userId=this.route.snapshot.paramMap.get('id');     
  }

}
