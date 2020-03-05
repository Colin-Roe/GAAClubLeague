import { TestBed, async, inject } from '@angular/core/testing';

import { ClubDetailGuard } from './club-detail.guard';

describe('ClubDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubDetailGuard]
    });
  });

  it('should ...', inject([ClubDetailGuard], (guard: ClubDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
