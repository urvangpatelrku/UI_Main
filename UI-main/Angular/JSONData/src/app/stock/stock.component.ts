import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks=[
    {name:"tata",price:400,qty:10},
    {name:"imofosys",price:1100,qty:10},
    {name:"bhel",price:900,qty:10},
    {name:"hdfc",price:1500,qty:10},
    {name:"sbi",price:800,qty:10}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
