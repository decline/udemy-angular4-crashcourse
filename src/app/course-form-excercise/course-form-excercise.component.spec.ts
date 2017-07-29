import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormExcerciseComponent } from './course-form-excercise.component';

describe('CourseFormExcerciseComponent', () => {
  let component: CourseFormExcerciseComponent;
  let fixture: ComponentFixture<CourseFormExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFormExcerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
