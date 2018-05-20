import { Component, OnInit, Input } from '@angular/core';

import { ProductItem } from '../models/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() productItem: ProductItem;

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log("product was added to cart");
  }
}
