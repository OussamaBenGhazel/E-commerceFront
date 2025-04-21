import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthenticationService } from 'src/app/services/User-Service/services/authentication.service';

export const adminGuard: CanActivateFn = () => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);
  
    const user = authService.getCurrentUserFromLocalStorage();
    console.log('Guard user:', user); // Log user for debugging
    if (user && user.roles.some((role: any) => role.name === 'ADMIN')) {
      return true;
    }
    router.navigate(['/login']);
    return false;
  };