import { Component, OnInit } from '@angular/core';
import { Video, videos } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public videos: Video[] = videos;

  constructor() { }

  ngOnInit() {
  }

}
