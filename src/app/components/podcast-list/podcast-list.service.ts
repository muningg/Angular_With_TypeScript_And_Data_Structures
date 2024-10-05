import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  private podcasts: string[] = [
    'The Joe Rogan Experience', 'The Tim Ferriss Show', 'How I Built This', 'Radiolab', 'My Favorite Murder', 'Stuff You Should Know', 'Hardcore History', 'The GaryVee Audio Experience', 'The Model Health Show', 'The School of Greatness with Lewis Howes'
  ];

  loadPodcasts() {
    return this.podcasts;
  }

  addPodcast(podcast: string) {
    this.podcasts.push(podcast);
  }
}
