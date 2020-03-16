import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientTableComparisionComponent } from './nutrient-table-comparision.component';

describe('NutrientTableComparisionComponent', () => {
  let component: NutrientTableComparisionComponent;
  let fixture: ComponentFixture<NutrientTableComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientTableComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientTableComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
