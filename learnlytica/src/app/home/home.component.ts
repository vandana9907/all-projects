import { Component, OnInit } from '@angular/core';
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

    this.userdata.subscribe( (data: any) => { this.mydata = data } );


  }

}
