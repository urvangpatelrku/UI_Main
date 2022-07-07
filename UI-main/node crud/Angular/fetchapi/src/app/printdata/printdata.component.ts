import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-printdata',
  templateUrl: './printdata.component.html',
  styleUrls: ['./printdata.component.css']
})
export class PrintdataComponent implements OnInit {
 
  post:any = []
  
  constructor(private _apidata:ApidataService) { }
  
    ngOnInit(): void {
    
    this._apidata.getdata().subscribe((data:any)=>{
      this.post=data;
    })

  }

}
