import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: string[];
    imageUrl = 'http://lorempixel.com/400/200';
    isActive = true;
    emailAddress = 'me@example.com';

    angularCourse = {
        title: 'The complete angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    ngOnInit(): void {
    }

    onSave($event: Event) {
        $event.stopPropagation();
        console.log('Button was clicked!', $event);
    }

    onDivClicked() {
        console.log('Div was clicked!');
    }

    onEnterPressed($event) {
        console.log($event.target.value);
    }

    onEmailSubmitted(email: String) {
        console.log(`Email: ${email}`);
    }

    onEmailTyped() {
        console.log(this.emailAddress);
    }
}
