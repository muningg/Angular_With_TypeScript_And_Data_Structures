import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: string[] = ['Lion', 'Tiger', 'Leopard', 'Bear', 'Elephant'];
  newAnimal: string = '';

  addAnimal() {
    if (this.newAnimal.trim()) {
      this.animals.push(this.newAnimal);
      this.newAnimal = '';
    }
  }
}
