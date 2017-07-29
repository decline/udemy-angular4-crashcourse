import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    contactMethods =  [
        { id: 1, name: 'Email' },
        { id: 2, name: 'Phone' }
    ];

    log(x) {
        console.log(x);
    }

    submit(form: NgForm) {
        console.log(form.value);
    }
}
