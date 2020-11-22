import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/course-services';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {ModuleServiceClient} from './services/module-service';
import {LessonServiceClient} from './services/lesson-service';
// import { QuizzesComponentComponent } from './quizzes-component/quizzes-component.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizzesServiceClient} from './services/quiz-service';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionsServiceClient} from './services/question-service';
// import { QuizComponentComponent } from './quiz-component/quiz-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomePageComponent,
    ModuleListComponent,
    LessonTabsComponent,
    // QuizzesComponentComponent,
    QuizzesComponent,
    QuizComponent,
    // QuizComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizzesServiceClient,
    QuestionsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
