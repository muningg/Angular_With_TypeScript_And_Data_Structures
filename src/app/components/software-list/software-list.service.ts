import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
  private softwares: string[] = [
    'Microsoft Office', 'Google Chrome', 'Zoom', 'Visual Studio Code', 'Git', 'Node.js', 'Apache', 'MySQL'
  ];

  loadSoftwares() {
    return this.softwares;
  }

  addSoftware(software: string) {
    this.softwares.push(software);
  }
}
