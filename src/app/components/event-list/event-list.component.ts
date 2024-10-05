import { Component } from '@angular/core';
import { EventListService } from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events = [''];
  newEvent = '';
  constructor(private eventListService: EventListService) { }

  addEvent() {
    if (this.newEvent.trim()) {
      this.eventListService.addEvent(this.newEvent);
      this.newEvent = '';
    }
  }
  provideEventsList() {
    this.events = this.eventListService.loadEvents();
  }
}
