import { Component } from '@angular/core';
import { LaptopListService } from './laptop-list.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptops: string[] = [];
  newLaptop: string = '';
  constructor(private laptopListService: LaptopListService) { }
  
  addLaptop() {
    if (this.newLaptop.trim()) {
      this.laptopListService.addLaptop(this.newLaptop);
      this.newLaptop = '';
    }
  }
  provideLaptopsList() {
    this.laptops = this.laptopListService.loadLaptops();
  }

}
