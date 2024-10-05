import { Component } from '@angular/core';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
  employees: string[] = ['Noesa Mae Chang'];
  newEmployee: string = '';
  constructor(private employeeListService: EmployeeListService) { }
  
  addEmployee() {
    if (this.newEmployee.trim()) {
      this.employeeListService.addEmployee(this.newEmployee);
      this.newEmployee = '';
    }
  }
  provideEmployeesList() {
    this.employees = this.employeeListService.loadEmployees();
  }

}


