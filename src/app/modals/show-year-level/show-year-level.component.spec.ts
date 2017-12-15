import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYearLevelComponent } from './show-year-level.component';

describe('ShowYearLevelComponent', () => {
  let component: ShowYearLevelComponent;
  let fixture: ComponentFixture<ShowYearLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYearLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYearLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
