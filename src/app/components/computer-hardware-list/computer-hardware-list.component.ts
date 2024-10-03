import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  computerHardwares: string[] = ['CPU', 'Motherboard', 'RAM', 'Hard Disk', 'Power Supply'];
  newComputerHardware: string = '';

  addComputerHardware() {
    if (this.newComputerHardware.trim()) {
      this.computerHardwares.push(this.newComputerHardware);
      this.newComputerHardware = '';
    }
  }

}
