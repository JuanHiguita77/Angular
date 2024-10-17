import { Component } from '@angular/core';
import ITask from '../models/ITaks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  LIST_STATES = ["Pending", "Completed", "Progress"];
  LIST_OBJECT_STATES = [
                        { name: "Completed", value: "Completed" }, 
                        { name: "Progress", value: "Progress" },
                        { name: "Pending", value: "Pending" }
                      ];

  task: ITask = {
    priority: "High",
    task: "Test Task",
    status: "Pending"
  }

  colorText = 'red'
  inputValue = '';

  changeStatus() {
    console.log(this.task.status);
  }

  trackByItem(index: number, item: { name: string; value: string }){
    return item.value; //valor unico o identificador, reemplazado por el track en nueva version
  }
}
