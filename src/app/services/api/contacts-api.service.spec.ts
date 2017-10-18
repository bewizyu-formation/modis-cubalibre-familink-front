import { TestBed, inject } from '@angular/core/testing';

import { ContactsApiService } from './contacts-api.service';

describe('ContactsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsApiService]
    });
  });

  it('should be created', inject([ContactsApiService], (service: ContactsApiService) => {
    expect(service).toBeTruthy();
  }));
});
