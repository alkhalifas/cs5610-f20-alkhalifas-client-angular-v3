import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
  graded = false;

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () => {
    this.answerChange.emit(this.answer);
    this.grade();
  }

  @Output()
  grade = () => {
    this.graded = true;
    console.log('this.answer: ', this.answer);
    console.log('this.question.correct: ', this.question.correct);
    console.log('Grading Status: ', this.graded);
  }

  constructor() { }

  ngOnInit(): void {
    console.log('TF Component');
    console.log('answer: ', this.answer);
  }

}
