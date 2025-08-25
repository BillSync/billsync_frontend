import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/landingpage/landingpage.component').then(
        (m) => m.LandingPageComponent
      );
    },
    canActivate: [LoginGuard],
  },
  {
    path: 'signup',
    loadComponent: () => {
      return import('./components/signup/signup.component').then(
        (m) => m.SignupComponent
      );
    },
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./components/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadComponent: () => {
      return import('./components/home/home.component').then(
        (m) => m.HomeComponent
      );
    },
    canActivate: [AuthGuard],
  },
];
