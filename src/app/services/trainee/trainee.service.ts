import { Injectable } from '@angular/core';
import { Trainee } from 'src/app/models/trainee/trainee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  baseURL: string = 'http://localhost:5000/api/trainee/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'login', data, this.httpOptions)
  }
  
  register(data: Trainee): Observable<any> {
    return this.httpClient.post<Trainee>(this.baseURL + 'register', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    return throwError(error.error.error)
  }

}
