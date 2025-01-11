import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent, } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [authGuard]
      }
    ]
  },
];
