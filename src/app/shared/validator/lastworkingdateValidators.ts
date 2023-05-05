import { FormGroup } from "@angular/forms";

export class lastworkingdateValidators {
    static datecomparison(fromDateField: string, toDateField: string): any {
        return (formGroup: FormGroup) => {
            const fromDate = formGroup.controls[fromDateField];
            const toDate = formGroup.controls[toDateField];
            if (toDate.errors && !toDate.errors['lastdatecustomeerror']) {
                return;
            }
            if ((fromDate !== null && toDate !== null) && fromDate.value >= toDate.value) {
                toDate.setErrors({ lastdatecustomeerror: true });
                fromDate.setErrors({ lastdatecustomeerror: true });
            }
            else {
                toDate.setErrors(null);
                fromDate.setErrors(null);
            }
            return null;
        };
    }
}



