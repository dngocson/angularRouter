import { TestBed } from '@angular/core/testing';

import { CanComponentNavigateService } from './can-component-navigate.service';

describe('CanComponentNavigateService', () => {
  let service: CanComponentNavigateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanComponentNavigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
