import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papcards',
  templateUrl: './papcards.component.html',
  styleUrls: ['./papcards.component.css']
})
export class PapcardsComponent implements OnInit {


  Box1 = [
    {
      title: 'RESTAURANTS',
      text1: 'Order Online',
      text2: 'Book Table',
      text3: 'Trending',
      text4: 'More ...',
      imagelink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5raXLcpVGUPSMuTroOF_tgbI95YXOjCRKgw&usqp=CAU'
    },
    {
      title: 'SHOP ONLINE',
      text1: 'Mobile',
      text2: 'Televisions',
      text3: 'Air Conditioners',
      text4: 'More ...',
      imagelink:'https://image.shutterstock.com/image-vector/mobile-phone-represent-front-shop-260nw-1719475720.jpg'
     
    }
  ];

  Box2 = [
    {
      title: 'DAILY NEEDS',
      text1: 'Grocery  ',
      text2: 'Chemists',
      text3: 'Bakery',
      text4: 'More ...',
      imagelink:'https://limetray.com/blog/wp-content/uploads/2020/04/nrd-D6Tu_L3chLE-unsplash-1024x768.jpg'
    },
    {
      title: 'DOCTORS',
      text1: 'Dentists',
      text2: 'Dermatologists',
      text3: 'ENT',
      text4: 'More ...',
      imagelink:'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/01/Stethoscope.jpg'     
    }
  ];



  Box3 = [
    {
      title: 'TRAVEL',
      text1: 'Flights',
      text2: 'Bus',
      text3: 'Hotels',
      text4: 'Car Rentals',
      imagelink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNV3FcUlXmUqx8eK-ZhL4a4VnubU94gn-Ng&usqp=CAU'
    },
    {
      title: 'REPAIRS',
      text1: 'Laptops',
      text2: 'Mobile Phones',
      text3: 'Washing Machine',
      text4: 'More ...',
      imagelink: 'https://cdn.vox-cdn.com/thumbor/8FzSzwNJpEP876Wn8xFWBVXYre8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16682260/GettyImages_641535676.jpg'

    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
