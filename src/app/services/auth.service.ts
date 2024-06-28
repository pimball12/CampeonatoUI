import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(email: string, password: string): boolean | void {

    this.apiService.post<any>('/login', {

      email: email,
      password: password
    }).subscribe(response => {

      if (response.success == 'true') {

        localStorage.setItem(environment.authTokenKey, response.data.token);
        return true;
      } else {

        return false;
      }
    });
  }

  register(name: string, email: string, password: string, password_confirmation: string): boolean | void {

    this.apiService.post<any>('/login', {

      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }).subscribe(response => {

      if (response.success == 'true') {

        localStorage.setItem(environment.authTokenKey, response.data.token);
        return true;
      } else {

        return false;
      }
    });
  }

  logout()  {

    return !!localStorage.getItem(environment.authTokenKey);
  }

  getAuthToken(): string | null {

    return localStorage.getItem(environment.authTokenKey);
  }
}
