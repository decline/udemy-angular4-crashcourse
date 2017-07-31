import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {
    static shouldBeIdentical(control: AbstractControl): ValidationErrors | null {
        if (control.get('newPassword').value !== control.get('confirmPassword').value) {
            return {
                shouldBeIdentical: true
            };
        }

        return null;
    }

    static oldPasswordShouldBeValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test123') {
                    resolve(null);
                } else {
                    resolve({ oldPasswordShouldBeValid: true });
                }
            }, 2000);
        });
    }
}