import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandReviewComponent } from './brand-review.component';

describe('BrandReviewComponent', () => {
  let component: BrandReviewComponent;
  let fixture: ComponentFixture<BrandReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
