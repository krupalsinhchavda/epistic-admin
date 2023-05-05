import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOurTeamComponent } from './add-edit-our-team.component';

describe('AddEditOurTeamComponent', () => {
  let component: AddEditOurTeamComponent;
  let fixture: ComponentFixture<AddEditOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOurTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
