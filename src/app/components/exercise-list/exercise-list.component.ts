import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises: string[] = ['Jumping Jacks', 'Push Ups', 'Running', 'Yoga', 'Walking', 'Swimming', 'Cycling', 'Dancing', 'Boxing', 'Gymnastics'];
  newExercise: string = '';

  addExercise() {
    if (this.newExercise.trim()) {
      this.exercises.push(this.newExercise);
      this.newExercise = '';
    }
  }
}
