import { Component } from '@angular/core';
import { SoftwareListService } from './software-list.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwares: string[] = [];
  newSoftware: string = '';
  constructor(private softwareListService: SoftwareListService) { }
  
  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwareListService.addSoftware(this.newSoftware);
      this.newSoftware = '';
    }
  }
  provideSoftwaresList() {
    this.softwares = this.softwareListService.loadSoftwares();
  }
}
