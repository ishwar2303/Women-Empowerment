import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoService } from 'src/app/services/ngo/ngo.service';

@Component({
  selector: 'ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css']
})
export class NgoDashboardComponent implements OnInit {

  navigation: boolean = false

  logoutState: boolean = false
  
  // @ts-ignore
  Username: string = localStorage.getItem('NgoUsername')
  
  constructor(private router: Router) { }


  ngOnInit(): void {
    if(localStorage.getItem('NgoId') == null) {
      this.router.navigate(['home', 'ngo'])
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
    localStorage.removeItem('NgoId')
    localStorage.removeItem('NgoUsername')
    this.router.navigate(['home', 'ngo'])
  }

}
