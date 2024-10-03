import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: string[] = ['Hammer', 'Saw', 'Drill', 'Wrench', 'Pliers'];
  newTool: string = '';

  addTool() {
    if (this.newTool.trim()) {
      this.tools.push(this.newTool);
      this.newTool = '';
    }
  }
}
