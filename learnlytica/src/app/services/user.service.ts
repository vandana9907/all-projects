import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // getUserListFromApi(): any {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private myHttp: HttpClient) { }
  getUserProfile() {
   return this.myHttp.get(' https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }
}
