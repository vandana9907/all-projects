import { Component, OnInit } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdata: any;
  mydata: any;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.userdata = this.user.getUserProfile();
  
    this.userdata

    .pipe(



      tap((userList: any) => {

        return userList.map(



          (element: any, index: number, arr: any) => {

            element['title'] = 'thbs';

            element['name'] = "Mr/Ms." + element['name'];

            return element



          })//closing of element



      })//closing of tap

    )
    .subscribe((data: any) => { this.mydata = data });

  }
}

