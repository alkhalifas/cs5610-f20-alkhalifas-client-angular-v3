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

  submitQuiz = () => {
    fetch(`http://localhost:3001/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result));
  }


}
