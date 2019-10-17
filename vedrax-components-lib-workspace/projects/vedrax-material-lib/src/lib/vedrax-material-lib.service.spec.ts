import { TestBed } from '@angular/core/testing';

import { VedraxMaterialLibService } from './vedrax-material-lib.service';

describe('VedraxMaterialLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VedraxMaterialLibService = TestBed.get(VedraxMaterialLibService);
    expect(service).toBeTruthy();
  });
});
