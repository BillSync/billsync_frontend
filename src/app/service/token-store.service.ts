import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenStoreService {
  constructor(private cookieService: CookieService) {}
  private token: string | null = null;

  set(token: string | null) {
    if (token) {
      this.cookieService.set('userCookie', token, 10);
    } else {
      this.cookieService.delete('userCookie');
    }
  }

  get(): string | null {
    const token = this.cookieService.get('userCookie');
    return token ? token : null;
    // return null;
  }

  clear() {
    this.cookieService.delete('userCookie');
  }
}
