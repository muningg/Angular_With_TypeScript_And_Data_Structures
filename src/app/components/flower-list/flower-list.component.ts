import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowers: string[] = ['Rose', 'Lily', 'Sunflower', 'Orchid', 'Tulip'];
  newFlower: string = '';

  addFlower() {
    if (this.newFlower.trim()) {
      this.flowers.push(this.newFlower);
      this.newFlower = '';
    }
  }
}
