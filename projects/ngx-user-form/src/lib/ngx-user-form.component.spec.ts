import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUserFormComponent } from './ngx-user-form.component';

describe('NgxUserFormComponent', () => {
  let component: NgxUserFormComponent;
  let fixture: ComponentFixture<NgxUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
