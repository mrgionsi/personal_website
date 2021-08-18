import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWorkPageComponent } from './personal-work-page.component';

describe('PersonalWorkPageComponent', () => {
  let component: PersonalWorkPageComponent;
  let fixture: ComponentFixture<PersonalWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalWorkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
