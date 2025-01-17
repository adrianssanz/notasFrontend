import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField: any = document.getElementById('password');
    if (this.passwordVisible) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.snackBar
          .open('Iniciando sesión', '', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe(() => {
            this.router.navigate(['/dashboard']);
            console.info("Sesión iniciada.");
          });
        
      },
      error: (err) => {
        console.error(err.error.message);
        this.errorMessage = err.error.message;
      },
    });
  }
}
