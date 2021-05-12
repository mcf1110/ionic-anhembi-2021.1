import { TestBed } from '@angular/core/testing';

import { MetaWeatherService } from './meta-weather.service';

describe('MetaWeatherService', () => {
  let service: MetaWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
