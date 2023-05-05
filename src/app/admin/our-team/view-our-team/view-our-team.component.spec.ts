import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOurTeamComponent } from './view-our-team.component';

describe('ViewOurTeamComponent', () => {
  let component: ViewOurTeamComponent;
  let fixture: ComponentFixture<ViewOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOurTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
