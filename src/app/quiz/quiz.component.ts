import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../services/quiz-service';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../services/question-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  quizId = '';
  questions = [];
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
    console.log(this.quizId);
    }

}
