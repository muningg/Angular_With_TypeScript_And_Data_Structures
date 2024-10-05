import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalListService {
  private animals: string[] = [
    'Lion', 'Tiger', 'Leopard', 'Bear', 'Elephant'
  ];

  loadAnimals() {
    return this.animals;
  }
  
  addAnimal(animal: string) {
    this.animals.push(animal);
  }
}
