import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { NgoStatus } from 'src/app/models/admin/ngo-status';

@Injectable({
  providedIn: 'root'
})
export class AdminNgosService {
  baseURL: string = 'http://localhost:5000/api/admin/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getApplications(): Observable<any> {
    return this.httpClient.get(this.baseURL + 'ngo/requests', this.httpOptions).pipe(catchError(this.handleError))
  }

  updateApplicationStatus(data: NgoStatus): Observable<any> {
    return this.httpClient.put<NgoStatus>(this.baseURL + 'Ngo/Update/Status', data ,this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err)
  }
}
