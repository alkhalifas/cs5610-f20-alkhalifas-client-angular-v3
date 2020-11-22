import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3001/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
