import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: string[] = ['Milo', "Energen","Oatmeal","Coke","Fudgee Bar"];
  newProduct: string = '';

  addProduct() {
    if (this.newProduct.trim()) {
      this.products.push(this.newProduct);
      this.newProduct = '';
    }
  }
  


}
