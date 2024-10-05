import { Component } from '@angular/core';
import { LanguageListService } from './language-list.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: string[] = [];
  newLanguage: string = '';
  constructor(private languageListService: LanguageListService) { }
  
  addLanguage() {
    if (this.newLanguage.trim()) {
      this.languageListService.addLanguage(this.newLanguage);
      this.newLanguage = '';
    }
  }
  provideLanguagesList() {
    this.languages = this.languageListService.loadLanguages();
  }
}
