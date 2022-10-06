import { TestBed } from '@angular/core/testing';

import { TawkService } from './tawk.service';

describe('TawkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TawkService = TestBed.get(TawkService);
    expect(service).toBeTruthy();
  });
});
