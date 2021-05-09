import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynclistComponent } from './asynclist.component';

describe('AsynclistComponent', () => {
  let component: AsynclistComponent;
  let fixture: ComponentFixture<AsynclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
