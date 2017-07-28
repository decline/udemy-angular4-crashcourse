import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecaseCustomPipe } from './titlecase-custom.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        TitlecaseComponent,
        TitlecaseCustomPipe,
        PanelComponent,
        LikeComponent
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
