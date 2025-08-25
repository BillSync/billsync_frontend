import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {
  ErrorModel,
  ErrorstoreService,
} from '../../service/errorstore.service';
import { TokenStoreService } from '../../service/token-store.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error$!: Observable<ErrorModel | null>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private errorStore: ErrorstoreService,
    private tokenService: TokenStoreService
  ) {}

  ngOnInit(): void {
    console.log('yep in login!');
    this.formValidators();
    this.error$ = this.errorStore.error$;
  }

  formValidators() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const response = await firstValueFrom(
        this.auth.login(this.loginForm.value)
      );
      this.router.navigate(['/home'], { replaceUrl: true });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
