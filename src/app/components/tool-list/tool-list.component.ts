import { Component } from '@angular/core';
import { ToolListService } from './tool-list.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: string[] = [];
  newTool: string = '';
  constructor(private toolListService: ToolListService) { }

  addTool() {
    if (this.newTool.trim()) {
      this.toolListService.addTool(this.newTool);
      this.newTool = '';
    }
  }
  provideToolsList() {
    this.tools = this.toolListService.loadTools();
  }
}
