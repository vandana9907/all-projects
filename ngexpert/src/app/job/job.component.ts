import { Component, OnInit ,Input, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() NameDet: any;
  @Input() ProfileDet: any;
  @Input() AddressDet: any;

  @Output() Out1 = new EventEmitter();  

  
  @Output() jobRoles =new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.Out1.emit({
      col: 'red',
      ser: 'fiveyears'
    });
    
  
  }

}
