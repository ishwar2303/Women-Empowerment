import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'app-ngo-courses',
  templateUrl: './ngo-courses.component.html',
  styleUrls: ['./ngo-courses.component.css']
})
export class NgoCoursesComponent implements OnInit {

  courses: any[] = []

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((d) => {
      this.courses = d
    })
  }


}
