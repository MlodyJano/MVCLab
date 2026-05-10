import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' // To sprawia, że serwis jest dostępny w całej aplikacji
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('myTasks');
      this.tasks = saved ? JSON.parse(saved) : [];
    }
  }
  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: '',
      completed: false
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      this.saveTasks();
    }
  }
  private saveTasks() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myTasks', JSON.stringify(this.tasks));
    }
}
}