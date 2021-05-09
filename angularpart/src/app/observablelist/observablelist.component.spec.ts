import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablelistComponent } from './observablelist.component';

describe('ObservablelistComponent', () => {
  let component: ObservablelistComponent;
  let fixture: ComponentFixture<ObservablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
