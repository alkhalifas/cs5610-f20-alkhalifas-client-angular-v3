import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  graded = false;
  answer = 'Pending';

  grade = () => {
    this.graded = true;
    console.log('this.answer: ', this.answer);
    console.log('this.question.correct: ', this.question.correct);
    console.log('Grading Status: ', this.graded);
  }

  constructor() { }

  ngOnInit(): void {
    console.log('TF Component');
  }

}
