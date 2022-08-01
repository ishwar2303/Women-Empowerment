import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/courses/course';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseURL: string = 'http://localhost:5000/api/course/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + 'Courses').pipe(catchError(this.handleError))
  }

  addCourse(data: Course): Observable<any> {
    return this.httpClient.post<Course>(this.baseURL + 'Add', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  updateCourse(data: Course): Observable<any> {
    return this.httpClient.put<Course>(this.baseURL + 'Update', data, this.httpOptions).pipe(catchError(this.handleError))
  }

  getCourse(courseId: number): Observable<any> {
    return this.httpClient.get<Course>(this.baseURL + 'Courses/' + courseId).pipe(catchError(this.handleError))
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.httpClient.delete<number>(this.baseURL + 'Delete/' + courseId, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err)
  }
}
