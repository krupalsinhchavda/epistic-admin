import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTestimonialComponent } from './add-edit-testimonial.component';

describe('AddEditTestimonialComponent', () => {
  let component: AddEditTestimonialComponent;
  let fixture: ComponentFixture<AddEditTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
