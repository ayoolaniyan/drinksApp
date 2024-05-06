import { TestBed } from '@angular/core/testing';

import { PocLibService } from './poc-lib.service';

describe('PocLibService', () => {
  let service: PocLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
