import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { VideoService } from './video.service';
import { VideoEffectsService } from './video-effects.service';
import { videosReducer, selectedVideoReducer, setFilterReducer } from './state';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video/video.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { VideoStatsComponent } from './video-stats/video-stats.component';
import { StatsFilterComponent } from './stats-filter/stats-filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoComponent,
    VideoEmbedderComponent,
    VideoStatsComponent,
    StatsFilterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      videos: videosReducer,
      selectedVideo: selectedVideoReducer,
      filter: setFilterReducer
    }),
    EffectsModule.forRoot([
      VideoEffectsService
    ])
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
