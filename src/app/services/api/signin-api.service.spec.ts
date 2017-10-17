import {inject, TestBed} from '@angular/core/testing';

import {SigninApiService} from './signin-api.service';

describe('SigninApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninApiService]
    });
  });

  it('should be created', inject([SigninApiService], (service: SigninApiService) => {
    expect(service).toBeTruthy();
  }));
});
