import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../services/quiz-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizzesServiceClient,
              private route: ActivatedRoute) { }

  courseId = '';
  quizzes = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes)
        .then(quizzes =>
          this.quizzes.forEach(quiz => {
            this.service.findAttemptsForQuiz(quiz._id)
            .then(attempts => quiz.attempts = attempts);
        }));
    });
  }
}
