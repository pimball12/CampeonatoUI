import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.post<any>(environment.apiUrl + '/login', {

        email: email,
        password: password
      }).subscribe({

        next: response => {

          if (response.success) {

            localStorage.setItem(environment.authTokenKey, response.data.token);
            resolve(true);
          } else {

            reject('error');
          }
        },

        error: error => {

          reject('error');
        }
      });
    });
  }

  register(name: string, email: string, password: string, password_confirmation: string): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.post<any>(environment.apiUrl + '/register', {

        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }).subscribe({

        next: response => {

          if (response.success) {

            localStorage.setItem(environment.authTokenKey, response.data.token);
            resolve(true);
          } else {

            reject('error');
          }
        },

        error: error => {

          reject('error');
        }
      });
    });
  }

  logout() {

    return localStorage.removeItem(environment.authTokenKey);
  }

  getAuthToken(): string | null {

    return localStorage.getItem(environment.authTokenKey);
  }
}
