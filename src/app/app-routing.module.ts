import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {QuizzesComponent} from './quizzes/quizzes.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'courses', component: CourseTableComponent},
  {path: 'courses/:courseId', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
