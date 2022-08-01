import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { TraineePersonalDetails } from 'src/app/models/trainee/trainee-personal-details';


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

  postPersonalDetails(data: TraineePersonalDetails): Observable<any> {
    return this.httpClient.post<TraineePersonalDetails>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getPersonalDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }

  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }

}
