import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOurTeamComponent } from './delete-our-team.component';

describe('DeleteOurTeamComponent', () => {
  let component: DeleteOurTeamComponent;
  let fixture: ComponentFixture<DeleteOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOurTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
