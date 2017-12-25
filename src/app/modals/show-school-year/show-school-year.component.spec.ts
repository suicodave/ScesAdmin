import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSchoolYearComponent } from './show-school-year.component';

describe('ShowSchoolYearComponent', () => {
  let component: ShowSchoolYearComponent;
  let fixture: ComponentFixture<ShowSchoolYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSchoolYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSchoolYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
