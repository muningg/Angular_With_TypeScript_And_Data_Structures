import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CarModelListComponent } from './components/car-model-list/car-model-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';

export const routes: Routes = [
    {path: 'students-list', component: StudentListComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'fruit-list', component: FruitListComponent},
    {path: 'course-list', component: CourseListComponent},
    {path: 'books-list', component: BookListComponent},
    {path: 'city-list', component: CityListComponent},
    {path: 'movie-list', component: MovieListComponent},
    {path: 'car-model-list', component: CarModelListComponent},
    {path: 'product-list', component: ProductListComponent},
    {path: 'subject-list', component: SubjectListComponent},
];
