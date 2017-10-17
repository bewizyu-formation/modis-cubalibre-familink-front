import {inject, TestBed} from '@angular/core/testing';

import {SigninService} from './signin.service';

describe('SigninService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninService]
    });
  });

  it('should be created', inject([SigninService], (service: SigninService) => {
    expect(service).toBeTruthy();
  }));
});
