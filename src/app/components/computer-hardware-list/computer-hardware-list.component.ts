import { Component } from '@angular/core';
import { ComputerHardwareListService } from './computer-hardware-list.service';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  computerHardwares: string[] = [];
  newComputerHardware: string = '';
  constructor(private computerListService: ComputerHardwareListService) { }

  addComputerHardware() {
    if (this.newComputerHardware.trim()) {
      this.computerListService.addComputer(this.newComputerHardware);
      this.newComputerHardware = '';
    }
  }
  provideComputerHardwaresList() {
    this.computerHardwares = this.computerListService.loadComputers();
  }
}
