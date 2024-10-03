import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: string[] = ['Java', 'JavaScript', 'Python', 'C#', 'C++', 'Go'];
  newLanguage: string = '';

  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languages.push(this.newLanguage);
      this.newLanguage = '';
    }
  }
}
