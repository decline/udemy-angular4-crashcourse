import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    ngOnInit(): void {
    }
}
