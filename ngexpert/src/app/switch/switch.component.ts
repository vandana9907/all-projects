import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  person=[
    {
      "name": "vandana chinnu",
      "age":22,
      "country":'USA'

    

  },
{
  "name": "sireesha gurram",
      "age":28,
      "country":'Uk'
},
{
  "name": "kiran vijaya",
      "age":38,
      "country":'CANADA'
},



{
  "name": "virat kohli",
      "age":35,
      "country":'IND'
},

];

getColors(code:string){
switch (code){
  case 'IND':
  return 'pink';
  break;
  
case 'USA':
  return'bule';
  break;
  default:
    return 'red';



}
}


  constructor() { }

  ngOnInit(): void {
  }

}
