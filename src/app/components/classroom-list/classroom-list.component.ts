import { Component } from '@angular/core';
import { ClassroomListService } from './classroom-list.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  classroomStudents: string[] = [''];
  newClassroomStudent: string = '';
  constructor(private classroomListService: ClassroomListService) { }
  
  addClassroomStudent() {
    if (this.newClassroomStudent.trim()) {
      this.classroomListService.addClassroom(this.newClassroomStudent);
      this.newClassroomStudent = '';
    }
  }
  provideClassroomsList() {
    this.classroomStudents = this.classroomListService.loadClassrooms();
  }
}
