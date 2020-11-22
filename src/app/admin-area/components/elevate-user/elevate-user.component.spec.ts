import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElevateUserComponent } from './elevate-user.component';

describe('ElevateUserComponent', () => {
  let component: ElevateUserComponent;
  let fixture: ComponentFixture<ElevateUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
