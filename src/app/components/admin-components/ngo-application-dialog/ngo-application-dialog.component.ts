import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngo-application-dialog',
  templateUrl: './ngo-application-dialog.component.html',
  styleUrls: ['./ngo-application-dialog.component.css']
})
export class NgoApplicationDialogComponent implements OnInit {

  @Input() application: any

  // @ts-ignore
  @Input() closeApplication: () => void
  
  constructor() { }

  ngOnInit(): void {
  }

}
