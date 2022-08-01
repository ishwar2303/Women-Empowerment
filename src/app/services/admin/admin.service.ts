import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Admin } from 'src/app/models/admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL: string = 'http://localhost:5000/api/admin/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  login(data: Admin): Observable<any> {
    return this.httpClient.post<Admin>(this.baseURL + 'login', data, this.httpOptions).pipe(catchError(this.handleError))
  }
  
  register(data: Admin): Observable<any> {
    return this.httpClient.post<Admin>(this.baseURL + 'register', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }
}
