import { Component } from '@angular/core';
import { CourseListService } from './course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: string[] = [];
  newCourse: string = '';

  constructor(private courseListService: CourseListService) { }
  
  addCourse() {
    if (this.newCourse.trim()) {
      this.courseListService.addCourse(this.newCourse);
      this.newCourse = '';
    }
  }
  provideCoursesList() {
    this.courses = this.courseListService.loadCourses();
  }
}
