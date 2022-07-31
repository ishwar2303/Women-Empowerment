import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  navigation: boolean = true

  constructor(private router: Router) { }


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
