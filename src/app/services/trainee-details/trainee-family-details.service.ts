import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeFamilyDetailsService {

  baseURL: string = 'http://localhost:5000/api/TraineeFamilyDetails/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  postFamilyDetails(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'Add', data, this.httpOptions)
  }

  getFamilyDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }
}
