import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMousetrapComponent } from './ng-mousetrap.component';

describe('NgMousetrapComponent', () => {
  let component: NgMousetrapComponent;
  let fixture: ComponentFixture<NgMousetrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMousetrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMousetrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
