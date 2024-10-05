import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private events: string[] = [
    'Angular Connect', 'Angular London Meetup'
  ];

  loadEvents() {
    return this.events;
  }

  addEvent(event: string) {
    this.events.push(event);
  }
}
