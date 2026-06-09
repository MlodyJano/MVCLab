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

  taskToEdit: Task = {
    id: 0,
    title: '',
    description: '',
    date: '',
    completed: false,
    priority: 'low'
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
    this.taskToEdit = { ...task };
  }

  // saveEdit(id: number) {
  //   if (this.editTitle.trim()) {
  //     this.taskService.updateTask(id, this.editTitle);
  //     this.editId = null; 
  //   }
  // }

  saveEditChanges(){
    if(this.taskToEdit.title && this.taskToEdit.date){
      this.taskService.updateTask(this.taskToEdit);
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

  searchQuery: string = '';
  get filteredTasks() {
  let tasks = this.taskService.getTasks();

  // POPRAWKA LOGIKI STATUSU:
  // Jeśli status to 'active' LUB domyślny 'all', chcemy widzieć tylko te do zrobienia (!t.completed)
  if (this.filterStatus === 'active' || this.filterStatus === 'all') {
    tasks = tasks.filter(t => !t.completed);
  } else if (this.filterStatus === 'completed') {
    tasks = tasks.filter(t => t.completed);
  }

  // Filtr wyszukiwarki (zostaje bez zmian)
  if (this.searchQuery.trim()) {
    tasks = tasks.filter(task => 
      task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  return tasks;
}

}

