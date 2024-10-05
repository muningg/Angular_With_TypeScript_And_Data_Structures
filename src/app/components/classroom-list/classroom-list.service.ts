import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
  private classrooms: string[] = [
    'Noesa Mae Chang',
    'John Carlo Salonga',
    'Althea Joy Cuenca',
    'Aldrich John Escalona',
    'Rafaela Mae Galvez',
    'Jasper Ian Llanes',
    'Jenica Mae Mendoza',
    'Hannah Mae Pagulayan',
    'Ronaldo Jr. Reyes',
    'Cristine Joy Rizardo',
    'Allysa Mae Roque',
    'Janine Mae San Juan',
    'Jasper Ian Sevilla',
    'John Carlo Soriano',
    'John Michael Tampus',
    'Aldrich John Valdez',
    'Rafaela Mae Villanueva',
    'Allysa Mae Villarante',
    'Janine Mae Yabut',
    'Jasper Ian Zapanta'
  ];

  loadClassrooms() {
    return this.classrooms;
  }
  
  addClassroom(classroom: string) {
    this.classrooms.push(classroom);
  }
}
