import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactdataComponent } from './delete-contactdata.component';

describe('DeleteContactdataComponent', () => {
  let component: DeleteContactdataComponent;
  let fixture: ComponentFixture<DeleteContactdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContactdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteContactdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
