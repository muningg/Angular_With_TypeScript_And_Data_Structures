import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerListService {
  private flowers: string[] = [
    'Rose', 'Lily', 'Sunflower', 'Orchid', 'Tulip'
  ];

  loadFlowers() {
    return this.flowers;
  }

  addFlower(flower: string) {
    this.flowers.push(flower);
  }
}
