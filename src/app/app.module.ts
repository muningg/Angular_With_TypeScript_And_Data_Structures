import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StudentListComponent } from './components/student-list/student-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }) 
  ],
  declarations: [
    AppComponent,
    StudentListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
