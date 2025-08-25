import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from '../../service/token-store.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  token!: string | null;

  constructor(
    private tokenService: TokenStoreService,
    private auth: AuthService,
    private router: Router
  ) {}

  async onLogout() {
    const response = await firstValueFrom(this.auth.logout());
    console.log('Response from logout API', response);
    this.tokenService.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
