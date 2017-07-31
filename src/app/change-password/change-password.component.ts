import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validators';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

    form;

    constructor(fb: FormBuilder) {
        this.form = fb.group(
            {
                oldPassword: [
                    '',
                    [
                        Validators.required
                    ],
                    [
                        ChangePasswordValidators.oldPasswordShouldBeValid
                    ]
                ],
                newPassword: [
                    '',
                    [
                        Validators.required
                    ]
                ],
                confirmPassword: [
                    '',
                    [
                        Validators.required
                    ]
                ]
            },
            {
                validator: ChangePasswordValidators.shouldBeIdentical
            }
        );
    }

    get oldPassword(): AbstractControl {
        return this.form.get('oldPassword');
    }

    get newPassword(): AbstractControl {
        return this.form.get('newPassword');
    }

    get confirmPassword(): AbstractControl {
        return this.form.get('confirmPassword');
    }

}
