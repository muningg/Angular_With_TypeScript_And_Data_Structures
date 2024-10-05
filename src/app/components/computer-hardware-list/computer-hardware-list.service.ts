import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareListService {
  private computers: string[] = [
    'CPU', 'Motherboard', 'RAM', 'Hard Disk', 'Power Supply'
  ];

  loadComputers() {
    return this.computers;
  }

  addComputer(computer: string) {
    this.computers.push(computer);
  }
}
