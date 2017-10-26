import { Video } from './../data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() videoClicked = new EventEmitter<Video>();
  @Input() selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  public onSelectVideo(video: Video) {
    this.videoClicked.emit(video);
  }

}
