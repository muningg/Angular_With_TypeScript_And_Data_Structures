import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: string[] = ['Programming 1', 'Programming 2', 'PE 1',"PE 2","Capstone 1","Capstone 2","System Integration Architecture 1 and 2"];
  newSubject: string = '';
  addSubject() {
    if (this.newSubject.trim()) {
      this.subjects.push(this.newSubject);
      this.newSubject = '';
    }
  }
}
