import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from './data';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>('http://localhost:8085/videos');
  }

}