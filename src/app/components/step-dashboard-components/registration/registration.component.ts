import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TraineeApplicationService } from 'src/app/services/trainee-details/trainee-application.service';

@Component({
  selector: 'step-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private traineeApplicationService: TraineeApplicationService) { }

  ngOnInit(): void {
    this.router.navigate(['step', 'registration', 'trainee-personal-details'])
  }


  sendApplication(): void {
    this.traineeApplicationService.postApplication({}).subscribe((d) => {
      console.log(d)
    })
  }

}
