import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  username: string ='';
  password: string='';
  errorMessage: string='';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.username, this.password).subscribe({
      next: (response)=>{
        this.router.navigate(['/dashboard']);
        console.log(response.message);
      },
      error: (err) => {
        console.error(err.error.message);
        this.errorMessage = err.error.message;
      }
    });
  }
}
