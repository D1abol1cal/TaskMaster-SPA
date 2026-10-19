import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Task } from './task.model';

const BASE_URL = 'http://localhost:8081/api';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  /** Latest list of tasks, shared by every component that needs it. */
  readonly tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  /** Re-fetch all tasks from the API and push them to subscribers. */
  refresh(): void {
    this.http
      .get<Task[]>(`${BASE_URL}/tasks`)
      .subscribe((tasks) => this.tasksSubject.next(tasks));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(`${BASE_URL}/tasks`, { ...task, project: null })
      .pipe(tap(() => this.refresh()));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http
      .put<Task>(`${BASE_URL}/tasks/${task.id}`, { ...task, project: null })
      .pipe(tap(() => this.refresh()));
  }

  toggleCompleted(task: Task): Observable<Task> {
    return this.updateTask({ ...task, completed: !task.completed });
  }

  deleteTask(id: number): Observable<void> {
    return this.http
      .delete<void>(`${BASE_URL}/tasks/${id}`)
      .pipe(tap(() => this.refresh()));
  }
}
