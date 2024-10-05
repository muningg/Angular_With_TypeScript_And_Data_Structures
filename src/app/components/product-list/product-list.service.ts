import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private products: string[] = [
    'Milo', "Energen","Oatmeal","Coke","Fudgee Bar"
  ];

  loadProducts() {
    return this.products;
  }
  
  addProduct(product: string) {
    this.products.push(product);
  }
}
