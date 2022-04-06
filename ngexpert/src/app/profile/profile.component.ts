import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() label: any;
  @Input() profile: any;
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
