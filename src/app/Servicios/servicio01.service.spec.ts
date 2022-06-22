import { TestBed } from '@angular/core/testing';

import { Servicio01Service } from './servicio01.service';

describe('Servicio01Service', () => {
  let service: Servicio01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicio01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
