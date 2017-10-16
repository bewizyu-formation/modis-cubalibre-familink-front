import { TestBed, inject } from '@angular/core/testing';

import { ProfilServiceService } from './profil-service.service';

describe('ProfilServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilServiceService]
    });
  });

  it('should be created', inject([ProfilServiceService], (service: ProfilServiceService) => {
    expect(service).toBeTruthy();
  }));
});
