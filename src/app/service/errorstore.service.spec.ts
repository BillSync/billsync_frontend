import { TestBed } from '@angular/core/testing';

import { ErrorstoreService } from './errorstore.service';

describe('ErrorstoreService', () => {
  let service: ErrorstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
