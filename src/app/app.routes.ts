import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

export const routes: Routes = [
    { path: 'students-list', component: StudentListComponent },
    {path: 'employee-list', component: EmployeeListComponent},
];
