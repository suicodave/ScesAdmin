import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegistrarComponent } from './show-registrar.component';

describe('ShowRegistrarComponent', () => {
  let component: ShowRegistrarComponent;
  let fixture: ComponentFixture<ShowRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
