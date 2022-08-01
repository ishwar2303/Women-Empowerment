import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // @ts-ignore
  adminLogin: FormGroup
  adminLoginSubmitted : boolean = false
  // @ts-ignore
  adminRegister:FormGroup
  adminRegisterSubmitted : boolean =false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // initialize ngo login form
    this.adminLogin = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.adminRegister = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    this.adminLoginSubmitted=true
    console.log(this.adminLogin.value)
  }

  register(): void {
    this.adminRegisterSubmitted=true
    console.log(this.adminRegister.value)
  }

}
