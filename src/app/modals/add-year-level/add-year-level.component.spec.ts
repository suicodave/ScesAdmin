import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYearLevelComponent } from './add-year-level.component';

describe('AddYearLevelComponent', () => {
  let component: AddYearLevelComponent;
  let fixture: ComponentFixture<AddYearLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYearLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYearLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
