import { Subscription } from 'rxjs/Subscription';
import { AppState, SelectVideoAction, SetFilterAction, VideosArrivedAction } from './../state';
import { Filter } from './../stats-filter/stats-filter.component';
import { View } from './../data';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Video } from '../data';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  videos: Observable<Video[]>;
  selectedVideo: Observable<Video>;
  filter: Observable<Filter>;
  filteredViews: Observable<View[]>;
  sub: Subscription;

  constructor(private videoService: VideoService, private store: Store<AppState>) {
    // Don't need this line because we use an ngrx Effect to fire this request.
    // this.sub = videoService.getVideos().subscribe(vl => store.dispatch(new VideosArrivedAction(vl)));

    this.videos = store.select(s => s.videos);
    this.selectedVideo = store.select(s => s.selectedVideo);
    this.filter = store.select(s => s.filter);
    this.filteredViews = store.select(s => {
      if (!s.selectedVideo) {
        return [];
      }
      return this.recalculateViews(s.selectedVideo.viewDetails, s.filter);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onVideoClicked(video: Video) {
    this.store.dispatch(new SelectVideoAction(video));
  }

  public setFilter(filter: Filter) {
    this.store.dispatch(new SetFilterAction(filter));
  }

  public recalculateViews(views: View[], filter: Filter) {
    const f = filter;

    return views.filter(vd => {
      if (!f['60plus'] && vd.age > 60) {
        return false;
      } else if (!f.under18 && vd.age < 18) {
        return false;
      } else if (!f['18to40'] && vd.age >= 18 && vd.age <= 40) {
        return false;
      } else if (!f['40to60'] && vd.age >= 40 && vd.age <= 60) {
        return false;
      } else if (f.region !== 'All' && f.region !== vd.region) {
        return false;
      } else if (new Date(f.startDate) > new Date(vd.date) ||
        new Date(f.endDate) < new Date(vd.date)) {
          return false;
        } else {
          return true;
        }
    });
  }

}
