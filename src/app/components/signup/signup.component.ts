//only standalone components can be imported in imports
//HttpClient is not a standalone component, it can be imported as a provider here
//when declaring signupForm - signupForm!: FormGroup; //the "!" used here is to make a promise to angular that in future the a value will be assigned to this variable - if we remove the above "!" it will give error

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { firstValueFrom, Observable } from 'rxjs';
import {
  ErrorModel,
  ErrorstoreService,
} from '../../service/errorstore.service';
import { TokenStoreService } from '../../service/token-store.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  error$!: Observable<ErrorModel | null>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private errorStore: ErrorstoreService,
    private tokenService: TokenStoreService
  ) {}

  ngOnInit(): void {
    this.formValidators();
    this.error$ = this.errorStore.error$;
  }

  formValidators() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }
  async onSubmit() {
    if (this.signupForm.valid) {
      const response = await firstValueFrom(
        this.auth.signup(this.signupForm.value)
      );
      this.router.navigate(['/login']);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
