import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
myCourse :any;
  constructor(private mConfig: ConfigService) { }
  getCourseList() {
  }
  ngOnInit(): void {
    this.mConfig.getCourseList().subscribe((sdata) => {

        // console.log()
        this.myCourse=sdata
    });

  }
}
