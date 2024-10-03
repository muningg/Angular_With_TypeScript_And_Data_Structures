import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  mobileApps: string[] = ['Facebook', 'Instagram', 'Twitter', 'Reddit', 'YouTube'];
  newMobileApp: string = '';

  addMobileApp() {
    if (this.newMobileApp.trim()) {
      this.mobileApps.push(this.newMobileApp);
      this.newMobileApp = '';
    }
  }
}
