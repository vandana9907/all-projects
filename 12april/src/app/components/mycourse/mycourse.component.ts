import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {
  @Input() imgid: any;
  @Input() configs: any;

  imgUrl: any;

  // constructor(private myconfig: ConfigService) { }

  ngOnInit(): void {
    // this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;
    console.log('Iam in cource child componen')
     console.log(this.configs)
  }

}
