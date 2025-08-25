import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ErrorModel {
  status: number;
  message: String;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorstoreService {
  constructor() {}

  private _error = new BehaviorSubject<ErrorModel | null>(null);
  error$ = this._error.asObservable();

  setError(error: ErrorModel) {
    this._error.next(error);
  }

  clearError() {
    this._error.next(null);
  }
}
