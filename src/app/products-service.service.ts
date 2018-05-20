import { Injectable } from '@angular/core';

import { ProductItem } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductItem[] {
    return [
      new ProductItem(),
      new ProductItem(),
    ];
  }
}
