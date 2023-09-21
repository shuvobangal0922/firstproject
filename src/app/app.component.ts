import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lecture 27: TODO list in angular';
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
  }
  removeTask(id:Number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}
