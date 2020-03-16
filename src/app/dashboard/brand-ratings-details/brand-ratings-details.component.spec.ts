import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRatingsDetailsComponent } from './brand-ratings-details.component';

describe('BrandRatingsDetailsComponent', () => {
  let component: BrandRatingsDetailsComponent;
  let fixture: ComponentFixture<BrandRatingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandRatingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRatingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
