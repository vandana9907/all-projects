import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() configs: any;
  @Input() imgid: any;
  imgUrl: any;
  courseTitle = 'git for begginers';
  courseDate = new Date()

  
  constructor(private myConfig: ConfigService) { }

  ngOnInit(): void {
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
   
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
  
     this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
  
    console.log('Iam in cource child componen')
    console.log(this.configs)
    
     this.myConfig.getCourseConfigs().subscribe(
       (data) => {
         console.log(data)
       });

  
   
  
  }
}
