import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events = ['Angular Connect', 'Angular London Meetup'];
  newEvent = '';

  addEvent() {
    if (this.newEvent) {
      this.events.push(this.newEvent);
      this.newEvent = '';
    }
  }
}
