import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DATA } from './mock-data';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  /** Local mock data — use Observable for consistency */
  getData(): Promise<any> {
    return Promise.resolve(DATA);
  }

  /** Remote data — HttpClient already parses JSON */
  getRemoteData<T = any>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const message =
      error.error?.message ||
      (typeof error.error === 'string' && error.error) ||
      `${error.status} - ${error.statusText || 'Server error'}`;
    console.error('HTTP error:', error);
    return throwError(() => new Error(message));
  }
}
