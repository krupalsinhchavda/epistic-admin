import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactdataComponent } from './view-contactdata.component';

describe('ViewContactdataComponent', () => {
  let component: ViewContactdataComponent;
  let fixture: ComponentFixture<ViewContactdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContactdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
