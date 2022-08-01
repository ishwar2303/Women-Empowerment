import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/courses/course';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'step-training-sectors',
  templateUrl: './training-sectors.component.html',
  styleUrls: ['./training-sectors.component.css']
})
export class TrainingSectorsComponent implements OnInit {

  courses: any[] = []

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((d) => {
    })

    this.courseService.getCourses().subscribe((res) => {
      let c = res.data
      for(let i=0; i<c.length; i+=2) {
        let arr = []
        arr.push(c[i])
        if(i+1 < c.length)
          arr.push(c[i+1])
        
        this.courses.push(arr)
      }
    }, (err) => {
      alert(err.error.error)
    })
  }



}
