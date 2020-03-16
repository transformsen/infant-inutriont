import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProductRankComponent } from './web-product-rank.component';

describe('WebProductRankComponent', () => {
  let component: WebProductRankComponent;
  let fixture: ComponentFixture<WebProductRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebProductRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProductRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
