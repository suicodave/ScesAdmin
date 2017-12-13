import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCollegeComponent } from './show-college.component';

describe('ShowCollegeComponent', () => {
  let component: ShowCollegeComponent;
  let fixture: ComponentFixture<ShowCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
