import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ModuleListComponent} from './module-list/module-list.component';

const routes: Routes = [
  {path: 'courses', component: CourseTableComponent},
  {path: '', component: HomePageComponent},
  {path: 'details/:courseId', component: CourseViewerComponent},
  {path: 'details/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'details/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
