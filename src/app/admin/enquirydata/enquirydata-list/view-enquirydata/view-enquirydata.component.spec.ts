import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnquirydataComponent } from './view-enquirydata.component';

describe('ViewEnquirydataComponent', () => {
  let component: ViewEnquirydataComponent;
  let fixture: ComponentFixture<ViewEnquirydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnquirydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEnquirydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
