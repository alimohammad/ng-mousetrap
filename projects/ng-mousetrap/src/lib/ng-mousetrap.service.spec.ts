import { TestBed, inject } from '@angular/core/testing';

import { NgMousetrapService } from './ng-mousetrap.service';

describe('NgMousetrapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgMousetrapService]
    });
  });

  it('should be created', inject([NgMousetrapService], (service: NgMousetrapService) => {
    expect(service).toBeTruthy();
  }));
});
