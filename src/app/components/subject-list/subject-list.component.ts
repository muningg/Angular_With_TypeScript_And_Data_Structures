import { Component } from '@angular/core';
import { SubjectListService } from './subject-list.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: string[] = [];
  newSubject: string = '';
  constructor(private subjectListService: SubjectListService) { }
  
  addSubject() {
    if (this.newSubject.trim()) {
      this.subjectListService.addSubject(this.newSubject);
      this.newSubject = '';
    }
  }
  provideSubjectsList() {
    this.subjects = this.subjectListService.loadSubjects();
  }
}
