import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-details.html'
})
export class TaskDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);
  
  task?: Task;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}
