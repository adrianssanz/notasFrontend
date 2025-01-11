import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  username: string ='';
  password: string='';

  constructor(private authService: AuthService){}

  login(){
    this.authService.login(this.username, this.password).subscribe({
      next: (response)=>{
        console.log('Inicio de sesión exitoso', response);
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
      }
    });
  }
}
