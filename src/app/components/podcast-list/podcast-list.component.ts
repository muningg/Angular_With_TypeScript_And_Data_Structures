import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcasts: string[] = ['The Joe Rogan Experience', 'The Tim Ferriss Show', 'How I Built This', 'Radiolab', 'My Favorite Murder', 'Stuff You Should Know', 'Hardcore History', 'The GaryVee Audio Experience', 'The Model Health Show', 'The School of Greatness with Lewis Howes'];
  newPodcast: string = '';

  addPodcast() {
    if (this.newPodcast.trim()) {
      this.podcasts.push(this.newPodcast);
      this.newPodcast = '';
    }
  }
}
