import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdataListComponent } from './contactdata-list.component';

describe('ContactdataListComponent', () => {
  let component: ContactdataListComponent;
  let fixture: ComponentFixture<ContactdataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactdataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
