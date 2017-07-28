import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    constructor() {
    }

    getCourses(): string[] {
        return ['course1', 'course2', 'course3'];
    }
}
