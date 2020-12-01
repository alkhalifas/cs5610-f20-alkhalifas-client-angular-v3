const HEROKU_URL = 'https://cs5610-node-server-a8.herokuapp.com';
const LOCAL_URL = 'http://localhost:3001';

import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {

  findAllQuizzes = () =>
    fetch('http://localhost:3001/api/quizzes')
      .then(response => response.json())

  findQuizById = (qid) =>
    fetch(`http://localhost:3001/api/quizzes/${qid}`)
      .then(response => response.json())

  findAttemptsForQuiz = (qid) =>
    fetch(`http://localhost:3001/api/quizzes/${qid}/attempts`)
      .then(response => response.json())
}
