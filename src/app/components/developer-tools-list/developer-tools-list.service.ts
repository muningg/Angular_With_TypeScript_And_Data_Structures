import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloperToolsListService {
  private developertools: string[] = [
    'Angular CLI', 'Visual Studio Code', 'Git', 'Github/Git', 'Stack Overflow'
  ];

  loadDeveloperTools() {
    return this.developertools;
  }

  addDeveloperTool(developertool: string) {
    this.developertools.push(developertool);
  }
}
