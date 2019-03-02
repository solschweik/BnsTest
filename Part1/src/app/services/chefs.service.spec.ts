import { TestBed } from '@angular/core/testing';

import { ChefsService } from './chefs.service';

describe('ChefsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefsService = TestBed.get(ChefsService);
    expect(service).toBeTruthy();
  });
});
