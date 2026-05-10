import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  studentData = {
    imie: 'Jan',
    nazwisko: 'Zarębski',
    nrIndeksu: '213769',
    kierunek: 'Informatyka',
    projekt: 'To-Do App'
  };

  pokazAlert() {
    alert('To jest alert z komponentu Home!');
  }

}
