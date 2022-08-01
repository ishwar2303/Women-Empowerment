import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logout-menu',
  templateUrl: './logout-menu.component.html',
  styleUrls: ['./logout-menu.component.css']
})
export class LogoutMenuComponent implements OnInit {

  // @ts-ignore
  @Input() logout: () => void

  constructor() { }

  ngOnInit(): void {
  }

}
