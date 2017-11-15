import { TestBed, inject } from '@angular/core/testing';

import { AssociarService } from './associar.service';

describe('AssociarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociarService]
    });
  });

  it('should be created', inject([AssociarService], (service: AssociarService) => {
    expect(service).toBeTruthy();
  }));
});
