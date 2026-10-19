import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  private taskService = inject(TaskService);

  /** Percentage of tasks marked completed, rounded to a whole number. */
  readonly progress$ = this.taskService.tasks$.pipe(
    map((tasks) =>
      tasks.length === 0
        ? 0
        : Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100),
    ),
  );
}
