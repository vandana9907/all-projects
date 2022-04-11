import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
    flights=[{
        image:'https://promos.makemytrip.com/notification/xhdpi//gsts-116x116-06042022.jpg',
        Title:'T&C `s Apply',
        Heading:'INTL FLIGHTS',
        Content:'Garib Up to 30% OFF* on Flights,Hotels,Holidays',
        Paragraph:'& More,and make the most of summers biggestdeals!',
        
        Line:'view Details'
        

    },

    {
      image:'https://promos.makemytrip.com/store//116x116-Desktop-NE.jpg',
      Title:'T&C `s Apply',
      Heading:'HOLIDAYS',
        Content:'Plan a Summer Break in Ladakh!',
        Paragraph:'Holidays Packages to Nubra Valley & morestart@just $21.999*!',
       Line:'Book Now'
        

  }];
  Flight=[
    
  
  {
    image:'https://promos.makemytrip.com/notification/xhdpi//gsts-116x116-06042022.jpg',
    Title:'T&C `s Apply',

    Heading:'INTL FLIGHTS',
    Content:'Up to Rs.4,500 OFF* on Flights to Middle East Asi...',
    Paragraph:'Book your summer trip with the Great Summer Travel Sale.',
   
   Line:'Book Now'


},
{
  image:'https://promos.makemytrip.com/notification/xhdpi//Amex-116x116-17082021.jpg',
  Title:'T&C `s Apply',
  Heading:'DOM FLIGHTS',
  Content:'Grab FLAT 15% Instant Discounts* on Domestic Flight...',
  Paragraph:'Valid on American Express Cards',
 
 Line:'view Details'

},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
