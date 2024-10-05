import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
  private subjects: string[] = [
    'Programming 1',
    'Programming 2',
    'PE 1',
    'PE 2',
    'Capstone 1',
    'Capstone 2',
    'System Integration Architecture 1',
    'System Integration Architecture 2'
  ];

  loadSubjects() {
    return this.subjects;
  }
  
  addSubject(subject: string) {
    this.subjects.push(subject);
  }
}
