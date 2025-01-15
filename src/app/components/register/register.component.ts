import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  password2: string = '';
  email: string = '';
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
    const password2Field: any = document.getElementById('password2');
    if (this.passwordVisible) {
      passwordField.type = 'text';
      password2Field.type = 'text';
    } else {
      passwordField.type = 'password';
      password2Field.type = 'password';
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        
            this.router.navigate(['/dashboard']);
            console.log(response.message);
      },
      error: (err) => {
        console.error(err.error.message);
        this.errorMessage = err.error.message;
      },
    });
  }

  register(){
    if(this.password != this.password2){
      this.errorMessage = 'Las contraseñas no coinciden.'
    } else{
      this.authService.register(this.username, this.email, this.password).subscribe({
        next: (response) => {
          this.snackBar
          .open('Registro completado, iniciando sesión.', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe(() => {
            this.login();
          });
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
    
    
  }
}
