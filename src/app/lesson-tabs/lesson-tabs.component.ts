import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course-services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  modules = [];
  lessons = [];
  courseId = '';
  moduleId = '';
  lessonId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/alkhalifas/modules/${this.moduleId}/lessons/`)
        .then(response => response.json())
        .then(lessons => this.lessons = lessons);
    });
  }
}
