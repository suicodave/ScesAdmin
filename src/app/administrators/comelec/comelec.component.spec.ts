import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComelecComponent } from './comelec.component';

describe('ComelecComponent', () => {
  let component: ComelecComponent;
  let fixture: ComponentFixture<ComelecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComelecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
