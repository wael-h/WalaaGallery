import { TestBed } from '@angular/core/testing';

import { PaintingWisdomsService } from './painting-wisdoms.service';

describe('Painting.WisdomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintingWisdomsService = TestBed.get(PaintingWisdomsService);
    expect(service).toBeTruthy();
  });
});
