import {
  AbstractControl,
  ValidatorFn,
  FormControl,
  FormGroup
} from '@angular/forms';

export class contactnumberValidators {
  constructor() { }
  static mustMatch(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      // console.log('contactnumberValidators')
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value == matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      }
      else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}

