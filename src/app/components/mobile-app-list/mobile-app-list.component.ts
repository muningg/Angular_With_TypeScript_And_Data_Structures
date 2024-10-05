import { Component } from '@angular/core';
import { MobileAppListService } from './mobile-app-list.service';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  mobileApps: string[] = [];
  newMobileApp: string = '';
  constructor(private mobileappListService: MobileAppListService) { }
  
  addMobileApp() {
    if (this.newMobileApp.trim()) {
      this.mobileappListService.addMobileApp(this.newMobileApp);
      this.newMobileApp = '';
    }
  }
  provideMobileAppsList() {
    this.mobileApps = this.mobileappListService.loadMobileApps();
  }
}
