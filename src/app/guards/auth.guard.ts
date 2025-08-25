// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { TokenStoreService } from '../service/token-store.service';

// export const AuthGuard: CanActivateFn = (route, state) => {
//   const tokenService = inject(TokenStoreService);
//   const router = inject(Router);

//   const publicRoutes: string[] = ['/login', '/signup', ''];
//   const token = !!tokenService.get();

//   const requestedUrl = state.url; // ✅ requested URL is available here

//   if (token) {
//     if (publicRoutes.includes(requestedUrl)) {
//       router.navigate(['/home'], { replaceUrl: true });
//       return false; // ⬅️ return false so navigation to login/signup is blocked
//     }
//     return true; // allow navigation
//   } else {
//     if (publicRoutes.includes(requestedUrl)) {
//       return true; // allow login/signup
//     }
//     router.navigate(['/login'], { replaceUrl: true });
//     return false; // block access
//   }
// };

// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStoreService } from '../service/token-store.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenStoreService);
  const router = inject(Router);

  const isLoggedIn = !!tokenService.get();

  if (!isLoggedIn) {
    router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

  return true;
};
