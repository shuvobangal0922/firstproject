import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {

    console.warn();
    

   }
   url="https://randomuser.me/api/";
   users(){
    return this.http.get(this.url);
   }
}
