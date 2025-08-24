import { Component } from '@angular/core';
import {ProjectTitle} from './project-title/project-title';
import {TaskList} from './task-list/task-list';
import {ProgressBar} from './progress-bar/progress-bar';

@Component({
  selector: 'app-project',
  imports: [
    ProjectTitle,
    TaskList,
    ProgressBar
  ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

}
