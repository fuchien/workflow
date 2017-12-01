import { TestBed, inject } from '@angular/core/testing';

import { FirstFormDatasService } from './first-form-datas.service';

describe('FirstFormDatasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstFormDatasService]
    });
  });

  it('should be created', inject([FirstFormDatasService], (service: FirstFormDatasService) => {
    expect(service).toBeTruthy();
  }));
});
