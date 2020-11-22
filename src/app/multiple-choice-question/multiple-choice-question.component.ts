import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  faCheck = faCheck; faTimes = faTimes;

  grade = () => { this.grading = true; };
  constructor() { }

  ngOnInit(): void {
    console.log('MC Component');
    console.log('MC Question: ', this.question.choices);
    console.log('Grading Status: ', this.grading);
  }

}
