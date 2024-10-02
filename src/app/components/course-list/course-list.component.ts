import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: string[] = ['Bachelor of Science in Information Technology', 'Bachelor of Science in Computer Science'];
  newCourse: string = '';

  addCourse() {
    if (this.newCourse.trim()) {
      this.courses.push(this.newCourse);
      this.newCourse = '';
    }
  }
}
