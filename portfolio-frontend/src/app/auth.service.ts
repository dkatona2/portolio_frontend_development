import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/v1.0/auth'; // URL to your backend

  constructor(private http: HttpClient) {}

  signin(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.authUrl}/signin`, credentials);
  }
}
