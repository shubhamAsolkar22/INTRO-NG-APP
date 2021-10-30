import { Injectable } from '@angular/core';
import { TASKS } from '../../assets/mock-tasks';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS
  }
}
