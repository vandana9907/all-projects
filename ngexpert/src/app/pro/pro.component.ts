import { Component, OnInit ,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {


  @Input() label: any;
  @Input() profile: any;

  @Output() configUpdated = new EventEmitter(); 


  constructor() { }

  ngOnInit(): void {

    alert(this.label)
    alert(this.profile)

    this.configUpdated.emit({
      courseName: 'MEAN',
      started_date: '12/12/2021'      
    })
  }

}
