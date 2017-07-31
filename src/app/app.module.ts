import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecaseCustomPipe } from './titlecase-custom.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormExcerciseComponent } from './course-form-excercise/course-form-excercise.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        TitlecaseComponent,
        TitlecaseCustomPipe,
        PanelComponent,
        LikeComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        CourseFormExcerciseComponent,
        SignupFormComponent,
        NewCourseFormComponent,
        ChangePasswordComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        CourseService,
        PostService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
