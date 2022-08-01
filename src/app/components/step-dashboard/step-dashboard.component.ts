import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeService } from 'src/app/services/trainee/trainee.service';

@Component({
  selector: 'step-dashboard',
  templateUrl: './step-dashboard.component.html',
  styleUrls: ['./step-dashboard.component.css']
})
export class StepDashboardComponent implements OnInit {

  navigation: boolean = false

  constructor(private router: Router, private traineeservice: TraineeService) { }

  ngOnInit(): void {
    this.toggleNavigation()
  }

  toggleNavigation(): void {
    let style = document.createElement('style')
    if(!this.navigation)
      style.innerHTML = '.navigation-title { width: 200px; }'
    else style.innerHTML = '.navigation-title { width: 0px; }'

    document.head.appendChild(style)
    this.navigation = !this.navigation
  }
}


