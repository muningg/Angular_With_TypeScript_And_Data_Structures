import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileAppListService {
  private mobileapps: string[] = [
    'Facebook', 'Instagram', 'Twitter', 'Reddit', 'YouTube'
  ];

  loadMobileApps() {
    return this.mobileapps;
  }

  addMobileApp(mobileapp: string) {
    this.mobileapps.push(mobileapp);
  }
}
