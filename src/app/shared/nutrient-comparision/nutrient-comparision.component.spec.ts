import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientComparisionComponent } from './nutrient-comparision.component';

describe('NutrientComparisionComponent', () => {
  let component: NutrientComparisionComponent;
  let fixture: ComponentFixture<NutrientComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
