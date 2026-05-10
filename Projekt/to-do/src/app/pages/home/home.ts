import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private taskService = inject(TaskService);
  
  studentData = {
    imie: 'Jan',
    nazwisko: 'Zarębski',
    nrIndeksu: '63751',
    projekt: 'To-Do App'
  };

  get stats() {
    const all = this.taskService.getTasks();
    return {
      total: all.length,
      active: all.filter(t => !t.completed).length,
      done: all.filter(t => t.completed).length
    };
  }

  pokazAlert(){
    alert(`Wykoał:\n${this.studentData.imie} ${this.studentData.nazwisko}\nNr indeksu: ${this.studentData.nrIndeksu}\nProjekt: ${this.studentData.projekt}`);
  }

}
