import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flights4Component } from './flights4.component';

describe('Flights4Component', () => {
  let component: Flights4Component;
  let fixture: ComponentFixture<Flights4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flights4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flights4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
