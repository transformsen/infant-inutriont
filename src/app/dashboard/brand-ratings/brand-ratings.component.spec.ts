import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRatingsComponent } from './brand-ratings.component';

describe('BrandRatingsComponent', () => {
  let component: BrandRatingsComponent;
  let fixture: ComponentFixture<BrandRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
