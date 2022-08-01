import { Injectable } from '@angular/core';
import { Trainee } from 'src/app/models/trainee/trainee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { TraineeLogin } from 'src/app/models/trainee/trainee-login';

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

  login(data: TraineeLogin): Observable<any> {
    return this.httpClient.post<TraineeLogin>(this.baseURL + 'login', data, this.httpOptions).pipe(catchError(this.handleError))
  }
  
  register(data: Trainee): Observable<any> {
    return this.httpClient.post<Trainee>(this.baseURL + 'register', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }

}
