import { Component } from '@angular/core';
import { VideoListService } from './video-list.service'; 

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videos: { description: string; link: string }[] = []; // Start with an empty array
  newVideoDescription: string = '';
  newVideoLink: string = '';

  constructor(private videoListService: VideoListService) { }

  addVideo() {
    if (!this.newVideoDescription || !this.newVideoLink) {
      return;
    }
    const newVideo = { description: this.newVideoDescription, link: this.newVideoLink };
    this.videoListService.addVideo(newVideo); 
    this.newVideoDescription = '';
    this.newVideoLink = '';
  }
  
  provideVideosList() {
    this.videos = this.videoListService.loadVideos(); 
  }
}
