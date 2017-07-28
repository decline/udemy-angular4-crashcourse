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

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    ngOnInit(): void {
    }
}
