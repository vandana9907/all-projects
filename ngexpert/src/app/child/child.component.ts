import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() nameConfig: any;
  @Input() ageConfig: any;

  constructor() { }

  ngOnInit(): void {

    alert(this.nameConfig);
    alert(this.ageConfig)
  }

}
