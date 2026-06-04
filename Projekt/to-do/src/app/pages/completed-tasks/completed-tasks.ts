import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './completed-tasks.html'
})
export class CompletedTasks {
  private taskService = inject(TaskService);

  // Pobieramy tylko te, które są skończone
  get completedTasks() {
    return this.taskService.getTasks().filter(t => t.completed);
  }

  onRestore(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id);
  }
}
