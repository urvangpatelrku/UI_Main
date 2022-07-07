import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 student:any[]=[
    {id:1,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:2,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:3,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:4,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:5,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:6,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:7,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:8,name:'Bhai Urvag',img:'assets/img/me.png',roll:14}
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
