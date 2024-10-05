import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {
  private laptops: string[] = [
    'Dell', 'HP', 'Lenovo', 'Asus', 'Apple'
  ];

  loadLaptops() {
    return this.laptops;
  }

  addLaptop(laptop: string) {
    this.laptops.push(laptop);
  }
}
