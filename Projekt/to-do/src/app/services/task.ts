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
      this.tasks = saved ? JSON.parse(saved).map((t: any) => ({
        ...t,
        priority: t.priority || 'low' 
  })) : [];
    }
  }
  getTasks(): Task[] {
  const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2 };
  return this.tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(title: string, description: string, date: string, priority: 'low' | 'medium' | 'high') {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: description,
      date: date,
      completed: false,
      priority: priority
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
  updateTask(updatedTask: Task) {
  const index = this.tasks.findIndex(t => t.id === updatedTask.id);
  if (index !== -1) {
    this.tasks[index] = updatedTask;
    this.saveTasks();
  }
}
  private saveTasks() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myTasks', JSON.stringify(this.tasks));
    }
}
}