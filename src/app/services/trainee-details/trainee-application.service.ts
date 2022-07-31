import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeApplicationService {

  baseURL: string = 'http://localhost:5000/api/TraineeApplication/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  postApplication(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'Request', data, this.httpOptions)
  }

  getApplication(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }
}
