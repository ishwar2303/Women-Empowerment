import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoApplicationService {

  baseURL: string = 'http://localhost:5000/api/NgoApplication/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  postApplication(traineeId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Request/' + traineeId, this.httpOptions).pipe(catchError(this.handleError))
  }

  getApplication(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err)
  }
}
