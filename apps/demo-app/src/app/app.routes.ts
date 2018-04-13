import { Routes, RouterModule } from '@angular/router';
import { KanbanComponent } from "./kanban";

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: KanbanComponent
  }
];

export const routing = RouterModule.forRoot(routes);
