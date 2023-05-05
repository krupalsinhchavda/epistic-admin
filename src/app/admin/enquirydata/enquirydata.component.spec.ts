import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirydataComponent } from './enquirydata.component';

describe('EnquirydataComponent', () => {
  let component: EnquirydataComponent;
  let fixture: ComponentFixture<EnquirydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquirydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
