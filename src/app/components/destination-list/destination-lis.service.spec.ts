import { TestBed } from '@angular/core/testing';

import { DestinationLisService } from './destination-lis.service';

describe('DestinationLisService', () => {
  let service: DestinationLisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationLisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
