import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';

const emptyTask = (): Task => ({
  id: 0,
  name: '',
  description: '',
  dueDate: new Date(),
  completed: false,
  project: 1,
});

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, TaskFormComponent, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  private taskService = inject(TaskService);

  readonly tasks$ = this.taskService.tasks$;
  showModal = false;
  formType: 'CREATE' | 'UPDATE' = 'CREATE';
  selectedTask: Task = emptyTask();

  constructor() {
    this.taskService.refresh();
  }

  toggleCompleted(task: Task) {
    this.taskService.toggleCompleted(task).subscribe();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe();
  }

  editTask(task: Task) {
    this.selectedTask = task;
    this.formType = 'UPDATE';
    this.showModal = true;
  }

  addNewTask() {
    this.selectedTask = emptyTask();
    this.formType = 'CREATE';
    this.showModal = true;
  }

  handleModalClose() {
    this.showModal = false;
  }
}
