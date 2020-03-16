import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMostNutrientComponent } from './brand-most-nutrient.component';

describe('BrandMostNutrientComponent', () => {
  let component: BrandMostNutrientComponent;
  let fixture: ComponentFixture<BrandMostNutrientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandMostNutrientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandMostNutrientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
