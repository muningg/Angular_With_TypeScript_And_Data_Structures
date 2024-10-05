import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private employees: string[] = [
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

  loadEmployees() {
    return this.employees;
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

