import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {

    const authToken = localStorage.getItem(environment.authTokenKey);

    return new HttpHeaders({

      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  getArray<T>(path: string): Observable<T[]> {

    return this.http.get<T[]>(environment.apiUrl + path, {headers: this.getHeaders()});
  }

  getObject<T>(path: string, id: number): Observable<T> {

    return this.http.get<T>(environment.apiUrl + path + `/${id}`, {headers: this.getHeaders()});
  }

  post<T>(path: string, data: T): Observable<T>  {

    return this.http.post<T>(environment.apiUrl + path, data, {headers: this.getHeaders()});
  }

  put<T>(path: string, id: number, data: T): Observable<T>  {

    return this.http.put<T>(environment.apiUrl + path + `/${id}`, data, {headers: this.getHeaders()});
  }

  delete<T>(path: string, id: number): Observable<T> {

    return this.http.delete<T>(environment.apiUrl + path + `/${id}`, {headers: this.getHeaders()});
  }
}
