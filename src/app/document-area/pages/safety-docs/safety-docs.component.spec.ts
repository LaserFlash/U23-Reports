import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SafetyDocsComponent } from './safety-docs.component';

describe('SafetyDocsComponent', () => {
  let component: SafetyDocsComponent;
  let fixture: ComponentFixture<SafetyDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
