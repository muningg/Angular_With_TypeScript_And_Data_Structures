import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private courses: string[] = [
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Information Technology',
    'Bachelor of Science in Computer Engineering',
    'Bachelor of Science in Computer Network',
    'Bachelor of Science in Computer Graphics',
    'Bachelor of Science in Computer Forensics',
    'Bachelor of Science in Computer Animation',
    'Bachelor of Science in Computer Security',
    'Bachelor of Science in Computer Data Science',
    'Bachelor of Science in Computer Software Engineering',
    'Bachelor of Science in Computer Game Development',
    'Bachelor of Science in Computer Artificial Intelligence',
    'Bachelor of Science in Computer Database Management',
    'Bachelor of Science in Computer Robotics',
    'Bachelor of Science in Computer Telecommunications',
  ];

  loadCourses() {
    return this.courses;
  }
  
  addCourse(course: string) {
    this.courses.push(course);
  }

}
