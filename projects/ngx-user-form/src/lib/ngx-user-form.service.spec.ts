import { TestBed } from '@angular/core/testing';

import { NgxUserFormService } from './ngx-user-form.service';

describe('NgxUserFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxUserFormService = TestBed.get(NgxUserFormService);
    expect(service).toBeTruthy();
  });
});
