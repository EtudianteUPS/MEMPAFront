import { TestBed } from '@angular/core/testing';

import { ApiUtilisateurBrokerService } from './api-utilisateur-broker.service';

describe('ApiUtilisateurBrokerServiceService', () => {
  let service: ApiUtilisateurBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtilisateurBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
