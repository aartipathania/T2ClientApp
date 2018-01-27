import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpResComponent } from './all-emp-res.component';

describe('AllEmpResComponent', () => {
  let component: AllEmpResComponent;
  let fixture: ComponentFixture<AllEmpResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmpResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
