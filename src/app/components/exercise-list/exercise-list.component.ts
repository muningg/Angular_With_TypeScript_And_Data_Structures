import { Component } from '@angular/core';
import { ExerciseListService } from './exercise-list.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises: string[] = [];
  newExercise: string = '';
  constructor(private exerciseListService: ExerciseListService) { }

  addExercise() {
    if (this.newExercise.trim()) {
      this.exerciseListService.addExercise(this.newExercise);
      this.newExercise = '';
    }
  }
  provideExercisesList() {
    this.exercises = this.exerciseListService.loadExercises();
  }
}
