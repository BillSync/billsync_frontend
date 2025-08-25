// src/app/guards/login.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStoreService } from '../service/token-store.service';

export const LoginGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenStoreService);
  const router = inject(Router);

  const isLoggedIn = !!tokenService.get();

  if (isLoggedIn) {
    router.navigate(['/home'], { replaceUrl: true });
    return false;
  }

  return true;
};
