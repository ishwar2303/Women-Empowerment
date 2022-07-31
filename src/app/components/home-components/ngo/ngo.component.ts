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
  // @ts-ignore
  ngoRegister:FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // initialize ngo login form
    this.ngoLogin = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.ngoRegister = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    console.log(this.ngoLogin.value)
  }

  register(): void {
    console.log(this.ngoRegister.value)
  }

}
