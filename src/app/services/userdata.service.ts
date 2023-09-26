import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return [
      {name:"Shuvo", mob:789489936788},
      {name:"akash", mob:789378438},
      {name:"Shyam", mob:789489734734738},
      {name:"amit", mob:7894387872338},
    ]
  }
}
