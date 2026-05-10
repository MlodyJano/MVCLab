import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { TaskDetails } from './pages/task-details/task-details';
import { CompletedTasks } from './pages/completed-tasks/completed-tasks';


export const routes: Routes = [
    { path: '', component: Home },
    {path: 'tasks', component: Tasks },
    {path: 'tasks/:id', component: TaskDetails },
    {path: 'completed', component: CompletedTasks },
];
