import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' 
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
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(title: string, description: string, date: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: description,
      date: date,
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
      task.completed = !task.completed;
      this.saveTasks();
    }
  }
  updateTask(id: number, newTitle: string) {
  const task = this.tasks.find(t => t.id === id);
  if (task) {
    task.title = newTitle;
    this.saveTasks();
  }
}
  private saveTasks() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myTasks', JSON.stringify(this.tasks));
    }
}
}