import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TraineePersonalDetailsService {

  baseURL: string = 'http://localhost:5000/api/TraineePersonalDetails/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  postPersonalDetails(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'Add', data, this.httpOptions)
  }

  getPersonalDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }
}
