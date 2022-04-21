import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
myCourse :any;
myTitle : string = 'thbs';
userList : any;
  myUserList$: any;
  constructor(private mConfig: ConfigService,private myUserSrv: UserService)
  
  { 
    this.myUserList$ = this.myUserSrv.getProfiles();
   }

   
  getCourseList() {
  }
  ngOnInit(): void {
    this.mConfig.getCourseList().subscribe((sdata) => {

        // console.log()
        this.myCourse=sdata
    });
    this.myUserSrv.getProfiles().subscribe((result: any) => {

      this.userList = result;

    })


  }
  

  }

