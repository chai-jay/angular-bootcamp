import { Component, OnInit, Input } from '@angular/core';

import { View } from './../data';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.css']
})
export class VideoStatsComponent implements OnInit {
  @Input() stats: View[];

  constructor() { }

  ngOnInit() {
  }

}
