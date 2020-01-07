/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodInfoService } from './food-info.service';

describe('Service: FoodInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodInfoService]
    });
  });

  it('should ...', inject([FoodInfoService], (service: FoodInfoService) => {
    expect(service).toBeTruthy();
  }));
});
