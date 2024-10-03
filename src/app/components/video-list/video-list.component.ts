import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videos: { description: string; link: string }[] = [
    { description: 'Video 1', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { description: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour', link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' },
    { description: 'Angular Tutorial for Beginners: Learn Angular & TypeScript', link: 'https://www.youtube.com/watch?v=k5E2AVpwsko' },
    { description: 'Firebase - Ultimate Beginner\'s Guide', link: 'https://www.youtube.com/watch?v=9kRgVxULbag' },
  ];
  newVideoDescription: string = '';
  newVideoLink: string = '';

  addVideo() {
    if (!this.newVideoDescription || !this.newVideoLink) {
      return;
    }
    this.videos.push({ description: this.newVideoDescription, link: this.newVideoLink });
    this.newVideoDescription = '';
    this.newVideoLink = '';
  }
}

