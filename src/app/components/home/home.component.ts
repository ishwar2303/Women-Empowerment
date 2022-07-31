import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboardLinks: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleDashboardLinks(): void {
    this.dashboardLinks = !this.dashboardLinks
  }

}
