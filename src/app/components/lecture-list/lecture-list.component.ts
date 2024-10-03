import { Component } from '@angular/core';

// Define the Lecture interface
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
  lectures: Lecture[] = [
    {
      course: 'INFORMATION ASSURANCE AND SECURITY 2',
      code: 'IAS 102',
      section: 'BSIT-4A',
      year: '4th Year',
      semester: '1st Semester',
      schoolYear: '2024-2025',
      professor: 'PROF. EDGARDO CRUZ',
      day: 'SAT',
      time: '02:00 PM - 05:00 PM',
      duration: '3 Hrs'
    },
    {
      course: 'SYSTEM INTEGRATION AND ARCHITECTURE 2',
      code: 'SIA 102',
      section: 'BSIT-4A',
      year: '4th Year',
      semester: '1st Semester',
      schoolYear: '2024-2025',
      professor: 'MR. JOSE GAYARES III',
      day: 'SAT',
      time: '06:00 PM - 09:00 PM',
      duration: '3 Hrs'
    },
    {
      course: 'SYSTEM ADMINISTRATION AND MAINTENANCE',
      code: 'SA 101',
      section: 'BSIT-4A',
      year: '4th Year',
      semester: '1st Semester',
      schoolYear: '2024-2025',
      professor: 'MR. WILBER SABADO',
      day: 'MON',
      time: '06:00 PM - 09:00 PM',
      duration: '3 Hrs'
    },
    {
      course: 'CAPSTONE PROJECT 1',
      code: 'CAP 101',
      section: 'BSIT-4A',
      year: '4th Year',
      semester: '1st Semester',
      schoolYear: '2024-2025',
      professor: 'MR. PERCIVAL ADAO',
      day: 'SAT',
      time: '11:00 AM - 02:00 PM',
      duration: '3 Hrs'
    }
  ];
  
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
  
  addLecture() {
    if (this.newLecture.course.trim()) {
      this.lectures.push({ ...this.newLecture });
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
