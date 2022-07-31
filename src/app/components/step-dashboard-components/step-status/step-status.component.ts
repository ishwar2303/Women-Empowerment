import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeApplicationService } from 'src/app/services/trainee-details/trainee-application.service';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.css']
})
export class StepStatusComponent implements OnInit {

  applicationStatus: any

  constructor(private router: Router, private traineeApplicationService: TraineeApplicationService) { }

  ngOnInit(): void {
    this.getApplicationStatus()
  }

  getApplicationStatus(): void {
    this.traineeApplicationService.getApplication(1).subscribe((d) => {
      console.log(d)
      this.applicationStatus = d
    })
  }
  
}
