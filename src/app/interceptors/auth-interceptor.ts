import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, EMPTY, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStoreService } from '../service/token-store.service';
import { ErrorstoreService } from '../service/errorstore.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('>>> AuthInterceptor triggered:', req.url);

  const tokenService = inject(TokenStoreService);
  const router = inject(Router);
  const errorStore = inject(ErrorstoreService);

  const token = tokenService.get();
  let authReq = req;
  if (token) {
    authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

  return next(authReq).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const body: any = event.body;
        console.log('body data', body);
        if (req.url.includes('/login') && body?.data) {
          tokenService.set(body.data.token);
        }
        if (req.url.includes('/logout')) {
          tokenService.clear();
        }
      }
    }),
    catchError((err: HttpErrorResponse) => {
      const errorModel = { status: err.status, message: err.error.message };
      errorStore.setError(errorModel);

      if (err.status === 401) {
        tokenService.clear();
        router.navigate(['/login']);
      } else if (err.status === 403) {
        router.navigate(['/forbidden']);
      }

      return EMPTY;
    })
  );
};
