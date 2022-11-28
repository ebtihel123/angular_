import { TestBed } from '@angular/core/testing';

import { ProduitService } from './nourriture.service';

describe('ProduitService', () => {
  let service: ProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
