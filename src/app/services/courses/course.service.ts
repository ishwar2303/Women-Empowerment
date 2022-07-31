import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/courses/course';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseURL: string = 'http://localhost:5000/api/home/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'courses')
  }

}
