import { TestBed } from '@angular/core/testing';

import { PdfNavigationPlayerService } from './pdf-navigation-player.service';

describe('PdfNavigationPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfNavigationPlayerService = TestBed.get(PdfNavigationPlayerService);
    expect(service).toBeTruthy();
  });
});
