import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsDataTableComponent } from './ingredients-data-table.component';

describe('IngredientsDataTableComponent', () => {
  let component: IngredientsDataTableComponent;
  let fixture: ComponentFixture<IngredientsDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
