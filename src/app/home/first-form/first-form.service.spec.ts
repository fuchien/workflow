import { TestBed, inject } from '@angular/core/testing';

import { FirstFormService } from './first-form.service';

describe('FirstFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstFormService]
    });
  });

  it('should be created', inject([FirstFormService], (service: FirstFormService) => {
    expect(service).toBeTruthy();
  }));
});
