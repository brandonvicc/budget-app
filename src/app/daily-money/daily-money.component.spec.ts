import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoneyComponent } from './daily-money.component';

describe('DailyMoneyComponent', () => {
  let component: DailyMoneyComponent;
  let fixture: ComponentFixture<DailyMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
