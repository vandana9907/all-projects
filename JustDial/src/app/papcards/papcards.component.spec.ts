import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapcardsComponent } from './papcards.component';

describe('PapcardsComponent', () => {
  let component: PapcardsComponent;
  let fixture: ComponentFixture<PapcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
