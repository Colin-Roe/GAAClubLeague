import { TestBed, async, inject } from '@angular/core/testing';

import { ClubEditGuard } from './club-edit.guard';

describe('ClubEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubEditGuard]
    });
  });

  it('should ...', inject([ClubEditGuard], (guard: ClubEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
