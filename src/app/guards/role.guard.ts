import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const roleGuard: (expectedRole: string) => CanActivateFn =
  (expectedRole) => () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isLoggedInAndHasProperRole: boolean | undefined = authService.isLoggedIn() && authService.getUserRoles()?.some((role: any) => role.authority === expectedRole);
    if (isLoggedInAndHasProperRole) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  };
