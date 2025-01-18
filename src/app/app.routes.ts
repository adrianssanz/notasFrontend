import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { LoginComponent, } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { auth2Guard } from './guards/auth2.guard';
import { ErrorComponent } from './error/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent, canActivate: [auth2Guard]
      },
      {
        path: 'login',
        component: LoginComponent, canActivate: [auth2Guard]
      },
      {
        path: 'register',
        component: RegisterComponent, canActivate: [auth2Guard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [authGuard]
      },
      {
        path: 'usuarios',
        component: ListaUsuariosComponent, canActivate: [adminGuard]
      }
    ]
  },
  {
    path:'**', component: ErrorComponent
  }
];
