import { TestBed } from '@angular/core/testing';

import { LiliService } from './lili.service';

describe('LiliService', () => {
  let service: LiliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
