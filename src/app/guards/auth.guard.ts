import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
        return false;
      }
      return true;
    })
  );
};