import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: '', component: HomePageComponent},
  {path: 'details/:courseId', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
