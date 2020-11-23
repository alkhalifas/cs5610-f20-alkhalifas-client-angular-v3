import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('https://localhost:3001/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://localhost:3001/quizzes/${qid}`)
      .then(response => response.json())
}
