import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  // ng serve --proxy-config urvang.json

  url="/api/stu"
  // url="mongodb://localhost:27017/student"

  constructor(private _httpclient:HttpClient) { }

  getdata(){
    return this._httpclient.get(this.url);
  }
}
