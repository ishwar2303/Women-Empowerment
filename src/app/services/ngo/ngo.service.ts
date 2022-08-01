import { Injectable } from '@angular/core';
import { Trainee } from 'src/app/models/trainee/trainee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Ngo } from 'src/app/models/ngo/ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  baseURL: string = 'http://localhost:5000/api/ngo/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  login(data: Ngo): Observable<any> {
    return this.httpClient.post<Ngo>(this.baseURL + 'login', data, this.httpOptions).pipe(catchError(this.handleError))
  }
  
  register(data: Ngo): Observable<any> {
    return this.httpClient.post<Ngo>(this.baseURL + 'register', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }
}
