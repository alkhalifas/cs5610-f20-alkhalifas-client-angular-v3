import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://localhost:3001/quizzes/${qid}/questions`)
      .then(response => response.json())
}
