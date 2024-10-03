import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  classroomStudents: string[] = ['Noesa'];
  newClassroomStudent: string = '';

  addClassroomStudent() {
    if (this.newClassroomStudent.trim()) {
      this.classroomStudents.push(this.newClassroomStudent);
      this.newClassroomStudent = '';
    }
  }
}
