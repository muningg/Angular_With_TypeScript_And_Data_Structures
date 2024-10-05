import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolListService {
  private tools: string[] = [
    'Hammer', 'Saw', 'Drill', 'Wrench', 'Pliers'
  ];

  loadTools() {
    return this.tools;
  }

  addTool(tool: string) {
    this.tools.push(tool);
  }
}
