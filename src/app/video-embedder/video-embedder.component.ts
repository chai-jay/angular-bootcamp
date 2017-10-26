import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-embedder',
  templateUrl: './video-embedder.component.html',
  styleUrls: ['./video-embedder.component.css']
})
export class VideoEmbedderComponent implements OnInit {
  @Input() videoId: string;

  constructor() { }

  ngOnInit() {
  }

}
