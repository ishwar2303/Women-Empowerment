import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraineeService } from 'src/app/services/trainee/trainee.service';
import { Trainee } from 'src/app/models/trainee/trainee';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  // @ts-ignore
  stepLogin: FormGroup
  loginErrorMessage: string = ''

  // @ts-ignore
  trainee: Trainee

  // @ts-ignore
  stepRegister: FormGroup
  stepRegisterSubmitted: boolean = false
  registerErrorMessage: string = ''
  registerSuccessMessage: string = ''

  constructor(private router: Router, private formBuilder: FormBuilder, private traineeService: TraineeService) { }

  ngOnInit(): void {
    // initialize step login form
    this.stepLogin = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.stepRegister = this.formBuilder.group({
      FullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      Username: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      DateOfBirth: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    })
  }

  login(): void {
    console.log(this.stepLogin.value)
  }

  register(): void {
    this.stepRegisterSubmitted = true
    this.registerErrorMessage = ''
    this.registerSuccessMessage = ''

    if(this.stepRegister.invalid)
      return

    this.trainee = this.stepRegister.value

    this.traineeService.register(this.trainee).subscribe((res) => {
      this.stepRegister.reset();
      this.stepRegisterSubmitted = false
      this.registerSuccessMessage = res.success
      console.log(res)
      localStorage.setItem('TraineeId', res.data.traineeId)
    }, (err) => {
      this.stepRegisterSubmitted = false
      this.registerErrorMessage = err
    })
  }

}
