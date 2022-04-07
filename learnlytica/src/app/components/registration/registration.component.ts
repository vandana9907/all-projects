import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit { 
  registration : FormGroup = new FormGroup (
    {
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    country: new FormControl()
}
);


  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
  }
}
