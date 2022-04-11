import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  languages = ['ENG', 'TELUGU', 'KANADA'];
  myform: FormGroup = new FormGroup(
    {
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email_travel: new FormControl('',
        [Validators.required,
        Validators.email,
        Validators.minLength(5),

        ]
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),


      languages: new FormControl('',)
    }
  );



  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);
  }
}
