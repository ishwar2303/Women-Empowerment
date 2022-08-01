import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoApplicationService } from 'src/app/services/ngo-details/ngo-application.service';

@Component({
  selector: 'app-ngo-status',
  templateUrl: './ngo-status.component.html',
  styleUrls: ['./ngo-status.component.css']
})
export class NgoStatusComponent implements OnInit {

  ngoId: number = Number(localStorage.getItem('NgoId'))

  errorMessage:string = ''
  applicationStatus: any = null

  constructor(private router: Router, private ngoApplicationService: NgoApplicationService) { }

  ngOnInit(): void {
    this.getApplicationStatus()
  }


  getApplicationStatus(): void {
    this.ngoApplicationService.getApplication(this.ngoId).subscribe((res) => {
      this.applicationStatus = res.data
      this.applicationStatus.requestDate = (new Date(res.data.requestDate)).toLocaleDateString().replace (/\//g, '-')
    }, (err) => {
      this.errorMessage = err.error.error
    })
  }
}
