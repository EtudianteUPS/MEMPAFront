import { TestBed } from '@angular/core/testing';

import { ApiMempaBrokerService } from './api-mempa-broker.service';

describe('ApiMempaBrokerService', () => {
  let service: ApiMempaBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMempaBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
