import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';

import { VideoService } from './video.service';
import { VideosArrivedAction } from './state';

@Injectable()
export class VideoEffectsService {
  // Fires off request to get videos after AppModule registers Effect
  @Effect() retrieveVideos = this.videoService.getVideos().map(vl => new VideosArrivedAction(vl));

  constructor(private videoService: VideoService) {}

}
