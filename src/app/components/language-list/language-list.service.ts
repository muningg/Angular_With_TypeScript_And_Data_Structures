import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private languages: string[] = [
    'Java', 'JavaScript', 'Python', 'C#', 'C++', 'Go'
  ];

  loadLanguages() {
    return this.languages;
  }

  addLanguage(language: string) {
    this.languages.push(language);
  }
}
