import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  myform : FormGroup = new FormGroup(

    {

    ticket: new FormControl('',Validators.required),

    des: new FormControl('', ),

    dropdown : new FormControl('', )

  }

  );



  constructor() { }

  ngOnInit(): void {
    
  }
  getValues() {

    console.log(this.myform);

  }
}
