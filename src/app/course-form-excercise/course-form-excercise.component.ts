import { Component } from '@angular/core';

@Component({
    selector: 'app-course-form-excercise',
    templateUrl: './course-form-excercise.component.html',
    styleUrls: ['./course-form-excercise.component.css']
})
export class CourseFormExcerciseComponent {

    categories = [
        { id: 1, name: 'Development' },
        { id: 2, name: 'Art' },
        { id: 3, name: 'Languages' }
    ];

}
