import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'delete-course-confirmation-dialog',
  templateUrl: './delete-course-confirmation-dialog.component.html',
  styleUrls: ['./delete-course-confirmation-dialog.component.css']
})
export class DeleteCourseConfirmationDialogComponent implements OnInit {

  // @ts-ignore
  @Input() hideDeleteDialog: () => void

  //@ts-ignore 
  @Input() deleteCourse: () => void
  
  constructor() { }

  ngOnInit(): void {
  }

}
