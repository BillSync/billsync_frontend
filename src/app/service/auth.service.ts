import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = ENVIRONMENT.apiUrl;

  constructor(private http: HttpClient) {}

  login(payload: { email: String; password: string }): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, payload);
  }

  signup(payload: {
    email: String;
    name: String;
    phoneNumber: String;
    password: String;
  }): Observable<any> {
    return this.http.post(`${this.baseURL}/signup`, payload);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseURL}/logout`, {});
  }
}
