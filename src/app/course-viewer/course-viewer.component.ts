import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course-services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  courseId = '';
  course = {
    _id : '',
    title: 'something'
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service
        .findCourseById(this.courseId)
        .then(course => this.course = course);
    });
  }

}
