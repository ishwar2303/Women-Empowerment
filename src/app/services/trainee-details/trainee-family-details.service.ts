import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { TraineeFamilyDetails } from 'src/app/models/trainee/trainee-family-details';
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

  postFamilyDetails(data: TraineeFamilyDetails): Observable<any> {
    return this.httpClient.post<TraineeFamilyDetails>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getFamilyDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Get/' + id)
  }
  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }
}
