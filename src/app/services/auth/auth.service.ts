import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient)

  login(email: string, password: string): Observable<string> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { email, password }, { responseType: "text" })
      .pipe(
        tap((token) => {
          this.saveToken(token);
        })
      )
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  verifyToken(): void {
    const token = this.getToken();
    if (!token) return;

    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
      }
    } catch {
      this.clearToken();
    }
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
        return false
      }
      return true;
    } catch {
      this.clearToken();
      return false;

    }
  }

  getUserRoles(): Object[] | null {
    const token = this.getToken();

    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken.roles);
      return decodedToken.roles || null;
    } catch {
      return null;
    }
  }

}
