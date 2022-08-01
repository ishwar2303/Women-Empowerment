import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  navigation: boolean = false

  logoutState: boolean = false
  
  // @ts-ignore
  Username: string = localStorage.getItem('AdminUsername')

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('AdminId') == null) {
      this.router.navigate(['home', 'admin'])
      return
    }

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

  toggleLogout = () => {
    this.logoutState = !this.logoutState
  }

  logout = () => {
    localStorage.removeItem('AdminId')
    localStorage.removeItem('AdminUsername')
    this.router.navigate(['home', 'admin'])
  }
}
