import { Component, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  private taskService = inject(TaskService);
  newTaskTitle: string = '';
  editTitle: string = '';
  editId: number | null = null;

  newTask = {
    title: '',
    description: '',
    date: '',
      priority: 'low' as 'low' | 'medium' | 'high'
  };

  addTask() {
    if (this.newTask.title && this.newTask.date) {
      this.taskService.addTask(this.newTask.title, this.newTask.description, this.newTask.date, this.newTask.priority);
      // Reset formularza
      this.newTask = { title: '', description: '', date: '', priority: 'low' };
    }
  }

  get tasks() {
    return this.taskService.getTasks().filter(t => !t.completed);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  startEdit(task: Task) {
    this.editId = task.id;
    this.editTitle = task.title;
  }

  saveEdit(id: number) {
    if (this.editTitle.trim()) {
      this.taskService.updateTask(id, this.editTitle);
      this.editId = null; 
    }
  }

  cancelEdit() {
    this.editId = null;
  }

  onToggle(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  isOverdue(taskDate: string): boolean {
  if (!taskDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const taskD = new Date(taskDate);
  return taskD < today;
  }

  filterStatus: 'all' | 'active' | 'completed' = 'all';

  get filteredTasks() {
  const tasks = this.taskService.getTasks();
  if (this.filterStatus === 'active') return tasks.filter(t => !t.completed);
  if (this.filterStatus === 'completed') return tasks.filter(t => t.completed);
  return tasks;
  }

}

