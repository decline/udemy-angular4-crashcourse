import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CourseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        CourseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
