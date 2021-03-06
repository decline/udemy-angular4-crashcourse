import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static minLength = 5;

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // whitespaces not allowed
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true};
        }

        return null;
    }

    static requiredLength(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length < UsernameValidators.minLength) {
            return {
                requiredLength: {
                    required: UsernameValidators.minLength,
                    actual: control.value.length
                }
            };
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // fake async operation
            setTimeout(() => {
                if (control.value === 'dominik') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }

            }, 2000);
        });
    }
}
