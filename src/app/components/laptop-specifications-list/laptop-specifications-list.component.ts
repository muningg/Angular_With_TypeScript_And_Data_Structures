import { Component } from '@angular/core';
import { LaptopSpecificationsListService } from './laptop-specifications-list.service';

// Define the Laptop interface
interface Laptop {
  brand: string;
  specifications: string[];
}

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrls: ['./laptop-specifications-list.component.css']
})
export class LaptopSpecificationsListComponent {

  laptops: Laptop[] = []; 
  newLaptop: string = '';
  newSpecification: string = '';

  constructor(private laptopSpecificationsListService: LaptopSpecificationsListService) {}

  provideSpecificationsList() {
    this.laptops = this.laptopSpecificationsListService.loadLaptops();
  }

  addLaptopSpecification() {
    if (this.newLaptop.trim() && this.newSpecification.trim()) {
      const newLaptop: Laptop = {
        brand: this.newLaptop,
        specifications: [this.newSpecification]
      };
      this.laptopSpecificationsListService.addLaptop(newLaptop);
      this.newLaptop = '';
      this.newSpecification = '';
    }
  }
}
