import { Component, OnInit } from '@angular/core';

import { Category } from '../category.enum';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  name: String;
  description: String;
  price: Number;
  category: Category;
  isAvailable: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log("on Byu button click");
  }
}
