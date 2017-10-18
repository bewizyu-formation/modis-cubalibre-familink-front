import { TestBed, inject } from '@angular/core/testing';

import { ContactsBusinessService } from './contacts-business.service';

describe('ContactsBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsBusinessService]
    });
  });

  it('should be created', inject([ContactsBusinessService], (service: ContactsBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
