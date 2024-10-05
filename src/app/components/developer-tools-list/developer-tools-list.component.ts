import { Component } from '@angular/core';
import { DeveloperToolsListService } from './developer-tools-list.service';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  developerTools = [''];
  newDeveloperTool = '';
  constructor(private developertoolListService: DeveloperToolsListService) { }
  
  addDeveloperTool() {
    if (this.newDeveloperTool.trim()) {
      this.developertoolListService.addDeveloperTool(this.newDeveloperTool);
      this.newDeveloperTool = '';
    }
  }
  provideDeveloperToolsList() {
    this.developerTools = this.developertoolListService.loadDeveloperTools();
  }
}
