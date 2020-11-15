import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/course-services';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModuleListComponent } from './module-list/module-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    HomePageComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
