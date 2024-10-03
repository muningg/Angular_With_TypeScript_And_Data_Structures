import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptops: string[] = ['Dell', 'HP', 'Lenovo', 'Asus', 'Apple'];
  newLaptop: string = '';

  addLaptop() {
    if (this.newLaptop.trim()) {
      this.laptops.push(this.newLaptop);
      this.newLaptop = '';
    }
  }

}
