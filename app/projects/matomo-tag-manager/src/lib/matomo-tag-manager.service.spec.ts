import { TestBed } from '@angular/core/testing';

import { MatomoTagManagerService } from './matomo-tag-manager.service';

describe('MatomoTagManagerService', () => {
  let service: MatomoTagManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatomoTagManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
