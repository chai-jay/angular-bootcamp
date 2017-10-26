import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Video } from '../data';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public videos: Observable<Video[]>;
  public selectedVideo: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
  }

  public onVideoClicked(video: Video) {
    this.selectedVideo = video;
  }

}
