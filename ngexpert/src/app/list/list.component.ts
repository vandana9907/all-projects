import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItem =[{

    title:'mangos',
 
    content:'All type of mangoes available here and pure Organic',
 
    btnText:'Buy Now!',
 
    image:'https://previews.123rf.com/images/photomaru/photomaru1909/photomaru190900011/130391747-isolated-mango-two-yellow-mango-fruit-hanging-on-a-tree-branch-isolated-on-white-background.jpg',
 
  },
  {
  title:'apple',
 
    content:'All type of apple available here and pure Organic',
 
    btnText:'Buy Now!',
 
    image:'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg',
 
  },

  {
    title:'banana',
   
      content:'All type of banana available here and pure Organic',
   
      btnText:'Buy Now!',
   
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzilG1gdJFXCfgTgKQmEqOr6xmd9BPkvFCIPCtAjUMofBFMEVsVLoWTBIWO4IHKn5-bs&usqp=CAU',
   
    },
  
  
   

    


  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
