import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnquirydataComponent } from './delete-enquirydata.component';

describe('DeleteEnquirydataComponent', () => {
  let component: DeleteEnquirydataComponent;
  let fixture: ComponentFixture<DeleteEnquirydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEnquirydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEnquirydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
