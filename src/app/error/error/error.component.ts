import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error',
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
