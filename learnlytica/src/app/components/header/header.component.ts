import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myDialog: MatDialog) { }

  ngOnInit(): void {
  }
openDialog(){
  const dialogRef = this.myDialog
  .open(
    ContactFormComponent,
    {
      height: '300px',
      width: '500px',
      disableClose: true
    }
  );

  dialogRef .afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
