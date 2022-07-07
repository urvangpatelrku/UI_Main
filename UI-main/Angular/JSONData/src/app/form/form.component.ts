import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Email=''
  Pass=''

  submit(login:any){
    console.log(this.Email);
  }

  constructor() {
    console.log(this.Email);

  }
  
  ngOnInit(): void {
    console.log(this.Email);
    
  }

}
