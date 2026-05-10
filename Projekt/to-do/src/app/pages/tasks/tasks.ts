import { Component, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  private taskService = inject(TaskService);
  newTaskTitle: string = '';

  get tasks() {
    return this.taskService.getTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }
  onToggle(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }
}

