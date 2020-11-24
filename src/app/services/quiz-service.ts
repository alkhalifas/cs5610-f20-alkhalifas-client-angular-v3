const HEROKU_URL = 'https://cs5610-node-server-a8.herokuapp.com';
const LOCAL_URL = 'http://localhost:3001';

import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('https://cs5610-node-server-a8.herokuapp.com/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://cs5610-node-server-a8.herokuapp.com/quizzes/${qid}`)
      .then(response => response.json())
}
