import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: string[] = [];
  newProduct: string = '';

  constructor(private productListService: ProductListService) { }
  
  addProduct() {
    if (this.newProduct.trim()) {
      this.productListService.addProduct(this.newProduct);
      this.newProduct = '';
    }
  }
  provideProductsList() {
    this.products = this.productListService.loadProducts();
  }

}
