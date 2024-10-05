import { Injectable } from '@angular/core';

// Define the Laptop interface
interface Laptop {
  brand: string;
  specifications: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecificationsListService {

  private laptops: Laptop[] = [
    { brand: 'Dell', specifications: ['Core i7', '16GB RAM', '512GB SSD'] },
    { brand: 'HP', specifications: ['Core i5', '8GB RAM', '256GB SSD'] },
    { brand: 'Lenovo', specifications: ['Core i3', '4GB RAM', '128GB SSD'] },
    { brand: 'Asus', specifications: ['Core i9', '32GB RAM', '1TB SSD'] },
    { brand: 'Apple', specifications: ['Core i7', '16GB RAM', '512GB SSD'] }
  ];

  loadLaptops() {
    return this.laptops;
  }

  addLaptop(laptop: Laptop) {
    this.laptops.push(laptop);
  }
}
