import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks = ['React', 'Angular', 'Vue', 'Ember', 'Backbone'];
  newFramework = '';

  addFramework() {
    if (this.newFramework) {
      this.frameworks.push(this.newFramework);
      this.newFramework = '';
    }
  }
}
