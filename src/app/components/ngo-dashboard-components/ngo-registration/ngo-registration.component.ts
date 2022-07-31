import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.css']
})
export class NgoRegistrationComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['ngo', 'registration', 'ngo-organization-details'])
  }
  sendApplication(): void {
    // this.traineeApplicationService.postApplication({}).subscribe((d) => {
    //   console.log(d)
    // })
  }
}
