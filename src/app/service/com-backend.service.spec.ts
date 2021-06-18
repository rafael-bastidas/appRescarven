import { TestBed } from '@angular/core/testing';

import { ComBackendService } from './com-backend.service';

describe('ComBackendService', () => {
  let service: ComBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
