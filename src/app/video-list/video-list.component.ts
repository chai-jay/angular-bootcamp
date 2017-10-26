import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videos = ['video 1', 'video 2', 'video 3', 'video 4'];

  selectedVideo: string;

  constructor() { }

  ngOnInit() {
  }

  public onSelectVideo(video: string) {
    this.selectedVideo = video;
  }

}
