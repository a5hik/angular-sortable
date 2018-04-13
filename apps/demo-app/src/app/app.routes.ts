import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(routes);
