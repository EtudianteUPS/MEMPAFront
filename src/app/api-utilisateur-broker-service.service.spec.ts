import { TestBed } from '@angular/core/testing';

import { ApiUtilisateurBrokerServiceService } from './api-utilisateur-broker-service.service';

describe('ApiUtilisateurBrokerServiceService', () => {
  let service: ApiUtilisateurBrokerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtilisateurBrokerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
