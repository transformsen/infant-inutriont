import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBrandUpdatedComponent } from './recent-brand-updated.component';

describe('RecentBrandUpdatedComponent', () => {
  let component: RecentBrandUpdatedComponent;
  let fixture: ComponentFixture<RecentBrandUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBrandUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBrandUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
