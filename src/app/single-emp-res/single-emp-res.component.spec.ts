import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmpResComponent } from './single-emp-res.component';

describe('SingleEmpResComponent', () => {
  let component: SingleEmpResComponent;
  let fixture: ComponentFixture<SingleEmpResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmpResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmpResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
