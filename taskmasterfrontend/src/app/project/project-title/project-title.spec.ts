import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTitle } from './project-title';

describe('ProjectTitle', () => {
  let component: ProjectTitle;
  let fixture: ComponentFixture<ProjectTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
