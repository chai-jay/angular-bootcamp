import { Action } from '@ngrx/store';

import { Filter } from './stats-filter/stats-filter.component';
import { Video } from './data';

export interface AppState {
    videos: Video[];
    selectedVideo: Video;
    filter: Filter;
}

const VIDEOS_ARRIVED = 'VIDEOS_ARRIVED';
export class VideosArrivedAction implements Action {
    type = VIDEOS_ARRIVED;
    constructor(public payload: Video[]) {}
}

const SELECT_VIDEO = 'SELECT_VIDEO';
export class SelectVideoAction implements Action {
    type = SELECT_VIDEO;
    constructor(public payload: Video) {}
}

const SET_FILTER = 'SET_FILTER';
export class SetFilterAction implements Action {
    type = SET_FILTER;
    constructor(public payload: Filter) {}
}

export function videosReducer(value: Video[] = [], action: Action) {
    switch (action.type) {
        case VIDEOS_ARRIVED:
            return (action as VideosArrivedAction).payload;
        default:
            return value;
    }
}

export function selectedVideoReducer(value: Video, action: Action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return (action as SelectVideoAction).payload;
        default:
            return value;
    }
}

export function setFilterReducer(value: Filter = {
    region: 'All',
    startDate: '1990-01-01',
    endDate: '2018-01-01',
    under18: true,
    '18to40': true,
    '40to60': true,
    '60plus': true
  }, action: Action) {
    switch (action.type) {
        case SET_FILTER:
            return (action as SetFilterAction).payload;
        default:
            return value;
    }
}

