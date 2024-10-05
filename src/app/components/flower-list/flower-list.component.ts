import { Component } from '@angular/core';
import { FlowerListService } from './flower-list.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowers: string[] = [];
  newFlower: string = '';
  constructor(private flowerListService: FlowerListService) { }
  
  addFlower() {
    if (this.newFlower.trim()) {
      this.flowerListService.addFlower(this.newFlower);
      this.newFlower = '';
    }
  }
  provideFlowersList() {
    this.flowers = this.flowerListService.loadFlowers();
  }
}
