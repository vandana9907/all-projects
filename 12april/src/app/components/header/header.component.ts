import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myDialogue: any;

  constructor() { }

  ngOnInit(): void {
    openDialog() 
      const dialogRef = this.myDialogue
        .open(LoginComponent,
          {
            height: '300px',
            width: '800px',
            disableClose: true
          }
        );
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
  function openDialog() {
    throw new Error('Function not implemented.');
  }

function LoginComponent(LoginComponent: any, arg1: { height: string; width: string; disableClose: boolean; }) {
  throw new Error('Function not implemented.');
}

