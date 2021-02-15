import { TestBed } from '@angular/core/testing';

import { RestFullService } from './rest-full.service';

describe('RestFullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestFullService = TestBed.get(RestFullService);
    expect(service).toBeTruthy();
  });
});
