import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() configs: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Iam in cource child componen')
      console.log(this.configs)

      // this.configs.getCourseConfigs().subscribe(
      //       (data: any) => {
      //       console.log(data)
      //      });
  }
 
  }


