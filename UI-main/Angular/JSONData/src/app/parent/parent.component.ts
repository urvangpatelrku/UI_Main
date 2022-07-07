import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data="hello from parent"



  testmsg=""
  
  fetchData(mMsg:any){
    this.testmsg=mMsg;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
