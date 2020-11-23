import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModuleById = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/alkhalifas/modules/${moduleId}`)
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/alkhalifas/courses/${courseId}/modules`)
      .then(response => response.json())
}
