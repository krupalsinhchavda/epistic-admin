import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirydataListComponent } from './enquirydata-list.component';

describe('EnquirydataListComponent', () => {
  let component: EnquirydataListComponent;
  let fixture: ComponentFixture<EnquirydataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirydataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquirydataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
