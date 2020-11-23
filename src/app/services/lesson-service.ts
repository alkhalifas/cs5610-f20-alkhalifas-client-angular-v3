import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonById = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/alkhalifas/lessons/${lessonId}`)
      .then(response => response.json())

  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/alkhalifas/modules/${moduleId}/lessons`)
      .then(response => response.json())
}
