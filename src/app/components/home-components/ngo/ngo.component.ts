import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  // @ts-ignore
  ngoLogin: FormGroup
  ngoLoginSubmitted: boolean = false
  // @ts-ignore
  ngoRegister:FormGroup
  ngoRegisterSubmitted: boolean = false
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // initialize ngo login form
    this.ngoLogin = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.ngoRegister = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    this.ngoLoginSubmitted=true;
    console.log(this.ngoLogin.value)
  }

  register(): void {
    this.ngoRegisterSubmitted=true;
    console.log(this.ngoRegister.value)
  }

}
