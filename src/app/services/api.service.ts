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

  getArray(path: string): Observable<any> {

    return this.http.get<any[]>(environment.apiUrl + path, {headers: this.getHeaders()});
  }

  getObject(path: string): Observable<any> {

    return this.http.get<any>(environment.apiUrl + path, {headers: this.getHeaders()});
  }

  post(path: string, data: any): Observable<any>  {

    return this.http.post<any>(environment.apiUrl + path, data, {headers: this.getHeaders()});
  }

  put(path: string, id: number, data: any): Observable<any>  {

    return this.http.put<any>(environment.apiUrl + path + `/${id}`, data, {headers: this.getHeaders()});
  }

  delete(path: string, id: number): Observable<any> {

    return this.http.delete<any>(environment.apiUrl + path + `/${id}`, {headers: this.getHeaders()});
  }
}
