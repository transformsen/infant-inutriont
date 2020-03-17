import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownIndicationComponent } from './up-down-indication.component';

describe('UpDownIndicationComponent', () => {
  let component: UpDownIndicationComponent;
  let fixture: ComponentFixture<UpDownIndicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownIndicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
