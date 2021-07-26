import { Component, OnInit } from '@angular/core';
import { Task } from '../types/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks : Array<Task> = [
    {
      id: 1,
      displayText: 'Revisar Correo',
      status: 'done'
    },
    {
      id: 2,
      displayText: 'Revisar Agenda',
      status: 'onGoing'
    },
    {
      id: 3,
      displayText: 'Scrum Daily',
      status: 'pending'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    const idsArray = this.tasks.map(element => element.id)
    const newId = Math.max(...idsArray) + 1;
    console.log('el nuevo id es: ', newId);

    this.tasks.push({
      id: newId,
      displayText: '<nueva tarea>',
      status: 'pending'
    })
  }

  selectedTask?: Task;
  setSelectedTask (task: Task){
    console.log('Tag seleccioneado',task);
    this.selectedTask = task;
  }

}
