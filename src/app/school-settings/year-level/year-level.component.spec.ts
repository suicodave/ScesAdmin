import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearLevelComponent } from './year-level.component';

describe('YearLevelComponent', () => {
  let component: YearLevelComponent;
  let fixture: ComponentFixture<YearLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
