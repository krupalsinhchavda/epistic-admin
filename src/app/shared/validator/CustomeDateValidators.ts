import { FormGroup } from "@angular/forms";

export class CustomeDateValidators {
    static datecomparison(fromDateField: string, toDateField: string): any {
        return (formGroup: FormGroup) => {
            const fromDate = formGroup.controls[fromDateField];
            const toDate = formGroup.controls[toDateField];
            if (toDate.errors && !toDate.errors['datecomparison']) {
                return;
            }
            if ((fromDate !== null && toDate !== null) && fromDate.value >= toDate.value) {
                toDate.setErrors({ datecomparison: true });
                fromDate.setErrors({ datecomparison: true });
            }
            else {
                toDate.setErrors(null);
                fromDate.setErrors(null);
            }
            return null;
        };
    }
}



