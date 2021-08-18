import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceTimelineComponent } from './workexperience-timeline.component';

describe('WorkexperienceTimelineComponent', () => {
  let component: WorkexperienceTimelineComponent;
  let fixture: ComponentFixture<WorkexperienceTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkexperienceTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperienceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
