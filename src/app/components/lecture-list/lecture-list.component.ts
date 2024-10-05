import { Component } from '@angular/core';
import { LectureListService } from './lecture-list.service';

interface Lecture {
  course: string;
  code: string;
  section: string;
  year: string;
  semester: string;
  schoolYear: string;
  professor: string;
  day: string;
  time: string;
  duration: string;
}

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {

  lectures: Lecture[] = [];
  newLecture: Lecture = {
    course: '',
    code: '',
    section: '',
    year: '',
    semester: '',
    schoolYear: '',
    professor: '',
    day: '',
    time: '',
    duration: ''
  };

  constructor(private lectureListService: LectureListService) {}

  provideLecturesList() {
    this.lectures = this.lectureListService.loadLectures();
  }

  addLecture() {
    if (this.newLecture.course.trim()) {
      this.lectureListService.addLecture({ ...this.newLecture });
      this.newLecture = {
        course: '',
        code: '',
        section: '',
        year: '',
        semester: '',
        schoolYear: '',
        professor: '',
        day: '',
        time: '',
        duration: ''
      };
    }
  }
}
