import { Component } from '@angular/core';
import { AnimalListService } from './animal-list.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: string[] = [];
  newAnimal: string = '';
  constructor(private animalListService: AnimalListService) { }
  
  addAnimal() {
    if (this.newAnimal.trim()) {
      this.animalListService.addAnimal(this.newAnimal);
      this.newAnimal = '';
    }
  }
  provideAnimalsList() {
    this.animals = this.animalListService.loadAnimals();
  }
}
