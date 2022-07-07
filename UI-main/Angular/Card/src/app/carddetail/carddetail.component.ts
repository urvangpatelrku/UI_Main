import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.css']
})
export class CarddetailComponent implements OnInit {
  student:any[]=[
    {id:1,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:2,name:'Urvag',img:'assets/img/me.png',roll:14},
    {id:3,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:4,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:5,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:6,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:7,name:'Bhai Urvag',img:'assets/img/me.png',roll:14},
    {id:8,name:'Bhai Urvag',img:'assets/img/me.png',roll:14}
 ]

  constructor(private _activitedRoute:ActivatedRoute) { }
 stud:any;
  ngOnInit(): void {
  this._activitedRoute.params.subscribe(param=>{
    this.stud=this.student[param['id']]
  })
  }

}
