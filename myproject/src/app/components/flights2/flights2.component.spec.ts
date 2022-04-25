import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flights2Component } from './flights2.component';

describe('Flights2Component', () => {
  let component: Flights2Component;
  let fixture: ComponentFixture<Flights2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flights2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flights2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
