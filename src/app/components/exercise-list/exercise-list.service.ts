import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
  private exercises: string[] = [
    'Jumping Jacks', 'Push Ups', 'Running', 'Yoga', 'Walking', 'Swimming', 'Cycling', 'Dancing', 'Boxing', 'Gymnastics'
  ];

  loadExercises() {
    return this.exercises;
  }

  addExercise(exercise: string) {
    this.exercises.push(exercise);
  }
}
