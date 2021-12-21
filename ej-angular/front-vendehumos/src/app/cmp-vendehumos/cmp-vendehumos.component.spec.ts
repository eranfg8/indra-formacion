import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpVendehumosComponent } from './cmp-vendehumos.component';

describe('CmpVendehumosComponent', () => {
  let component: CmpVendehumosComponent;
  let fixture: ComponentFixture<CmpVendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpVendehumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpVendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
