import { Component } from '@angular/core';
import { FrameworkListService } from './framework-list.service';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks = [''];
  newFramework = '';
  constructor(private frameworkListService: FrameworkListService) { }
  
  addFramework() {
    if (this.newFramework.trim()) {
      this.frameworkListService.addFramework(this.newFramework);
      this.newFramework = '';
    }
  }
  provideFrameworksList() {
    this.frameworks = this.frameworkListService.loadFrameworks();
  }
}
