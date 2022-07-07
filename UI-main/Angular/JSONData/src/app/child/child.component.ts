import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() msg=""


  @Output() myEvent=new EventEmitter();

  sendData(data:any){
    this.myEvent.emit(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
