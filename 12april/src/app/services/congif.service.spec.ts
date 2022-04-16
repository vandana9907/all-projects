import { TestBed } from '@angular/core/testing';

import { CongifService } from './congif.service';

describe('CongifService', () => {
  let service: CongifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
