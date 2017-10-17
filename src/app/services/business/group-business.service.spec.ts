import { TestBed, inject } from '@angular/core/testing';

import { GroupBusinessService } from './group-business.service';

describe('GroupBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupBusinessService],
    });
  });

  it('should be created', inject([GroupBusinessService], (service: GroupBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
