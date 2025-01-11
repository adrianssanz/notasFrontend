import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true, // Define el componente como independiente
  imports: [CommonModule, RouterModule], // Incluir CommonModule aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router,private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
      console.log('Is logged in:', isLoggedIn);
      this.cdRef.detectChanges();
    });
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
      this.loggedIn = false;
      console.log('Logged out');
      this.cdRef.detectChanges();
    });
  }
}
