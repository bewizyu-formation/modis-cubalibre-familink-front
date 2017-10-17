import { TestBed, inject } from '@angular/core/testing';

import { GroupApiService } from './group-api.service';

describe('GroupApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupApiService]
    });
  });

  it('should be created', inject([GroupApiService], (service: GroupApiService) => {
    expect(service).toBeTruthy();
  }));
});
