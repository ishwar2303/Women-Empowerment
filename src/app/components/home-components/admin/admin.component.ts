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
  // @ts-ignore
  adminRegister:FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // initialize ngo login form
    this.adminLogin = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.adminRegister = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    console.log(this.adminLogin.value)
  }

  register(): void {
    console.log(this.adminRegister.value)
  }

}
