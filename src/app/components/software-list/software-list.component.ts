import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwares: string[] = ['Microsoft Office', 'Google Chrome', 'Zoom', 'Visual Studio Code', 'Git', 'Node.js', 'Apache', 'MySQL'];
  newSoftware: string = '';

  addSoftware() {
    if (this.newSoftware.trim()) {
      this.softwares.push(this.newSoftware);
      this.newSoftware = '';
    }
  }
}
