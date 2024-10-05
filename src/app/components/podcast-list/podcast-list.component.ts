import { Component } from '@angular/core';
import { PodcastListService } from './podcast-list.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcasts: string[] = [];
  newPodcast: string = '';

  constructor(private podcastListService: PodcastListService) { }
  
  addPodcast() {
    if (this.newPodcast.trim()) {
      this.podcastListService.addPodcast(this.newPodcast);
      this.newPodcast = '';
    }
  }
  providePodcastsList() {
    this.podcasts = this.podcastListService.loadPodcasts();
  }
}
