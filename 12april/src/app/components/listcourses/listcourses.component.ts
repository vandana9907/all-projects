import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.component.html',
  styleUrls: ['./listcourses.component.css']
})
export class ListcoursesComponent implements OnInit {
  cList: any;
  dList: any;
  eList: any;
  fList: any;
  gList: any;

  constructor(private call: ConfigService) { }

  ngOnInit(): void {

    this.call.getCourseListCourse().subscribe((value: any) => {
      this.cList = value
    });
    this.call.getCourseListCourse1().subscribe((value1: any) => {
      this.dList = value1
    });
    this.call.getCourseListCourse2().subscribe((value2: any) => {
      this.eList = value2
    });
    this.call.getCourseListCourse3().subscribe((value3: any) => {
      this.fList = value3
    });
    this.call.getCourseListCourse4().subscribe((value4: any) => {
      this.gList = value4
    });
  }

}
