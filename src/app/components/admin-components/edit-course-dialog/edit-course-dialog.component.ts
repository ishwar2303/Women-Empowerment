import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from 'src/app/models/courses/course';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent implements OnInit {

  // @ts-ignore
  @Input hideEditCourseDialog: () => void
  
  // @ts-ignore
  @Input() fetchCourses: () => void

  // @ts-ignore
  courseForm: FormGroup
  successMessage: string = ''
  errorMessage: string = ''
  submitted: boolean = false

  // @ts-ignore
  @Input selectedCourseId

  // @ts-ignore
  course: Course

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    
    this.courseService.getCourse(this.selectedCourseId).subscribe((res) => {
      this.course = res.data
      console.log('Course')
      console.log(this.course)
      this.courseForm = this.formBuilder.group({
        CourseId: [this.course.courseId, [Validators.required]],
        Code: [this.course.code, [Validators.required]],
        Description: [this.course.description, [Validators.required]]
      })
    }, (err) => {
      alert(err.error.error)
    })

  }

  saveCourseDetails(): void {
    this.submitted = true
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.courseForm.value)

    if(this.courseForm.invalid)
      return

    this.courseService.updateCourse(this.courseForm.value).subscribe((res) => {
      this.successMessage = res.success
      this.submitted = false
      this.fetchCourses()
    }, (err) => {
      this.errorMessage = err.error
    })
  }

}
