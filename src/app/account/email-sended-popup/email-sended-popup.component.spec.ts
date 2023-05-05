import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendedPopupComponent } from './email-sended-popup.component';

describe('EmailSendedPopupComponent', () => {
  let component: EmailSendedPopupComponent;
  let fixture: ComponentFixture<EmailSendedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSendedPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSendedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
