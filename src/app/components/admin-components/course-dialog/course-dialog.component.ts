import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  // @ts-ignore
  @Input() hideNewCourseDialog: () => void

  // @ts-ignore
  @Input() fetchCourses: () => void

  // @ts-ignore
  courseForm: FormGroup
  successMessage: string = ''
  errorMessage: string = ''
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      Code: ['', [Validators.required]],
      Description: ['', [Validators.required]]
    })
  }

  saveCourseDetails(): void {
    this.submitted = true
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.courseForm.value)

    if(this.courseForm.invalid)
      return

    this.courseService.addCourse(this.courseForm.value).subscribe((res) => {
      this.successMessage = res.success
      this.submitted = false
      this.fetchCourses()
    }, (err) => {
      this.errorMessage = err.error
    })
    
  }
}
