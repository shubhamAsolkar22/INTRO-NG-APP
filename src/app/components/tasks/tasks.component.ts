import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksFromObservable) => this.tasks = tasksFromObservable);
  }

  deleteTask(taskToBeDeleted: Task) {
    this.taskService.deleteTask(taskToBeDeleted)
      .subscribe((/* deletedTask */) => {
        this.tasks = this.tasks.filter(t => t.id !== taskToBeDeleted.id); 
        //console.log(deletedTask);
      });
  }

  toggleReminder(taskToToggleReminder : Task){
    taskToToggleReminder.reminder = !taskToToggleReminder.reminder;
    this.taskService.updateTaskReminder(taskToToggleReminder).subscribe();
  }

  addTask(taskToBeAdded : Task){
    this.taskService.addTask(taskToBeAdded).subscribe((addedTask)=>this.tasks.push(addedTask));
    
  }

}
