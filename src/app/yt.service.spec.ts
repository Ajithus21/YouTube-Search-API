import { TestBed } from '@angular/core/testing';

import { YTService } from './yt.service';

describe('YTService', () => {
  let service: YTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
