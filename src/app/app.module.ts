import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe
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
