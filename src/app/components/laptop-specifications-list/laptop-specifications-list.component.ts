import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  laptops = [
    { brand: 'Dell', specifications: ['Core i7', '16GB RAM', '512GB SSD'] },
    { brand: 'HP', specifications: ['Core i5', '8GB RAM', '256GB SSD'] },
    { brand: 'Lenovo', specifications: ['Core i3', '4GB RAM', '128GB SSD'] },
    { brand: 'Asus', specifications: ['Core i9', '32GB RAM', '1TB SSD'] },
    { brand: 'Apple', specifications: ['Core i7', '16GB RAM', '512GB SSD'] }
  ];
  newLaptop: string = '';
  newSpecification: string = '';

  addLaptopSpecification() {
    if (this.newSpecification.trim()) {
      this.laptops.push({
        brand: this.newLaptop,
        specifications: [this.newSpecification]
      });
      this.newLaptop = '';
      this.newSpecification = '';
    }
  }

}
