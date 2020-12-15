import { TestBed } from '@angular/core/testing';

import { RouteNavigateService } from './route-navigate.service';

describe('RouteNavigateService', () => {
  let service: RouteNavigateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteNavigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
