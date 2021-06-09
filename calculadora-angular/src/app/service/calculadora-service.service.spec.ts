/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculadoraServiceService } from './calculadora-service.service';

describe('Service: CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraServiceService]
    });
  });

  it('should ...', inject([CalculadoraServiceService], (service: CalculadoraServiceService) => {
    expect(service).toBeTruthy();
  }));
});
