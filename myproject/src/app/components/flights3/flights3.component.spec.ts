import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flights3Component } from './flights3.component';

describe('Flights3Component', () => {
  let component: Flights3Component;
  let fixture: ComponentFixture<Flights3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flights3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flights3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
