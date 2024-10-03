import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  developerTools = ['Angular CLI', 'Visual Studio Code', 'Git', 'Github/Git', 'Stack Overflow'];
  newDeveloperTool = '';

  addDeveloperTool() {
    if (this.newDeveloperTool) {
      this.developerTools.push(this.newDeveloperTool);
      this.newDeveloperTool = '';
    }
  }
}
