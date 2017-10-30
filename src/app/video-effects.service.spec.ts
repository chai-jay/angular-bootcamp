import { TestBed, inject } from '@angular/core/testing';

import { VideoEffectsService } from './video-effects.service';

describe('VideoEffects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoEffectsService]
    });
  });

  it('should be created', inject([VideoEffectsService], (service: VideoEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
