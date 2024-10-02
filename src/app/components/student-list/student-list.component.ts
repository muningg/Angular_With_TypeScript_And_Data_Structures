import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: string[] = ['Noesa'];
  newStudent: string = '';

  addStudent() {
    if (this.newStudent.trim()) {
      this.students.push(this.newStudent);
      this.newStudent = '';
    }
  }
}