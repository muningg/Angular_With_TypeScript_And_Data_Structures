import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
  private frameworks: string[] = [
    'React', 'Angular', 'Vue', 'Ember', 'Backbone'
  ];

  loadFrameworks() {
    return this.frameworks;
  }

  addFramework(framework: string) {
    this.frameworks.push(framework);
  }
}
