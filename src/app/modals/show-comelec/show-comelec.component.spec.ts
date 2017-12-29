import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComelecComponent } from './show-comelec.component';

describe('ShowComelecComponent', () => {
  let component: ShowComelecComponent;
  let fixture: ComponentFixture<ShowComelecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComelecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
