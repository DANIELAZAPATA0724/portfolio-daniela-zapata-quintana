import { Routes } from '@angular/router';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'register',
    component: AuthRegisterComponent, //auth registro
  },
  {
    path: 'login',
    component: AuthLoginComponent, //autentificacion del login
  },
];
