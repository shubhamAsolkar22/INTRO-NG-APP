import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text : string;
  day : string;
  reminder : boolean;
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //emit event
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
