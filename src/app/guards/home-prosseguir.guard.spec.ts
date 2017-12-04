import { TestBed, async, inject } from '@angular/core/testing';

import { HomeProsseguirGuard } from './home-prosseguir.guard';

describe('HomeProsseguirGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeProsseguirGuard]
    });
  });

  it('should ...', inject([HomeProsseguirGuard], (guard: HomeProsseguirGuard) => {
    expect(guard).toBeTruthy();
  }));
});
