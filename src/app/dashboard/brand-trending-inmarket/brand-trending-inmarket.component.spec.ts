import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTrendingInmarketComponent } from './brand-trending-inmarket.component';

describe('BrandTrendingInmarketComponent', () => {
  let component: BrandTrendingInmarketComponent;
  let fixture: ComponentFixture<BrandTrendingInmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTrendingInmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTrendingInmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
