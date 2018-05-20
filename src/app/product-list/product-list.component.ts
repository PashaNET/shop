import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../models/product';
import { ProductsService } from '../products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts()
    console.log(this.products);
  }

}
