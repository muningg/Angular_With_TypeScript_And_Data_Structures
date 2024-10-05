import { Component } from '@angular/core';
import { StudentListService } from './student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  newStudent: string = '';
  students: string[] = [];

  constructor(private studentListService: StudentListService) {}

  addStudent() {
    if (this.newStudent.trim()) {
      this.studentListService.addStudent(this.newStudent);
      this.newStudent = '';
    }
  }

  // Called when the "Get Reserved Students" button is clicked
  provideStudentsList() {
    this.students = this.studentListService.provideStudentsList();
  }
}
