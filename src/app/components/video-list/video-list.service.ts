import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private videos: { description: string; link: string }[] = [
    { description: 'Video 1', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { description: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour', link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' },
    { description: 'Angular Tutorial for Beginners: Learn Angular & TypeScript', link: 'https://www.youtube.com/watch?v=k5E2AVpwsko' },
    { description: 'Firebase - Ultimate Beginner\'s Guide', link: 'https://www.youtube.com/watch?v=9kRgVxULbag' },
  ];

  constructor() { }

  loadVideos() {
    return this.videos; // Return the list of videos
  }

  addVideo(video: { description: string; link: string }) {
    this.videos.push(video); // Add a new video to the list
  }
}
