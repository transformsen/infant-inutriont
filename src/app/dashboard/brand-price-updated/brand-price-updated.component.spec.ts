import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPriceUpdatedComponent } from './brand-price-updated.component';

describe('BrandPriceUpdatedComponent', () => {
  let component: BrandPriceUpdatedComponent;
  let fixture: ComponentFixture<BrandPriceUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandPriceUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPriceUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
