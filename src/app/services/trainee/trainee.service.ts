import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/courses/course';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  baseURL: string = 'http://localhost:5000/api/trainee/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {

    return this.httpClient.post<any>(this.baseURL + 'login', data, this.httpOptions)
  }
  
  
}
