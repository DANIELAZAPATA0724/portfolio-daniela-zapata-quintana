import { Component } from '@angular/core';
import { AuthLoginComponent } from "../auth-login/auth-login.component";
import { AuthRegisterComponent } from "../auth-register/auth-register.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    imports: [AuthLoginComponent, AuthRegisterComponent]
})
export class BlogComponent {

  constructor(private router: Router) {} // Inject Router service

  navigateToAuthLogin() {
    this.router.navigate(["/login"]);
  }
  navigateToAuthRegister() {
    this.router.navigate(["/register"]);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
