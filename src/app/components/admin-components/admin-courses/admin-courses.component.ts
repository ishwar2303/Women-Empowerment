import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/courses/course';
import { CourseService } from 'src/app/services/courses/course.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {


  successMessage: string = ''
  errorMessage: string = ''
  courses: Course[] = []

  courseDialogState: boolean = false
  editCourseDialogState: boolean = false
  deleteCourseDialogState: boolean = false
  editCourseButton: boolean = true
  deleteCourseButton: boolean = true

  // @ts-ignore
  selectedCourseId: number

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.fetchCourses()
  }

  fetchCourses = (): void => {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res.data.reverse()
      console.log(res.data)
      this.disableEditAndDelte()
    }, (err) => {
      alert(err.error.error)
    })
  }

  showDialog(): void {
    this.courseDialogState = true
  }

  hideDialog = (): void => {
    this.courseDialogState = false
  }

  showEditDialog(): void {
    this.editCourseDialogState = true
  }

  hideEditDialog = (): void =>  {
    this.editCourseDialogState = false
  }

  showDeleteDialog(): void {
    this.deleteCourseDialogState = true
  }

  hideDeleteDialog = (): void => {
    this.deleteCourseDialogState = false
  }

  onRadioChange(courseId: number) {
    this.editCourseButton = false
    this.deleteCourseButton = false
    this.selectedCourseId = courseId
    console.log(this.selectedCourseId)
  }

  disableEditAndDelte = (): void => {
    this.deleteCourseButton = true
    this.editCourseButton = true
  }



  deleteCourse = (): void => {
    this.courseService.deleteCourse(this.selectedCourseId).subscribe((res) => {
      this.successMessage = res.success
      this.fetchCourses()
      this.hideDeleteDialog()
    }, (err) => {
      this.errorMessage = err.error
    })
  }

}
