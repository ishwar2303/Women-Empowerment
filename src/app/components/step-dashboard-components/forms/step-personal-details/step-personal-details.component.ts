import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraineePersonalDetailsService } from 'src/app/services/trainee-details/trainee-personal-details.service';

@Component({
  selector: 'step-personal-details',
  templateUrl: './step-personal-details.component.html',
  styleUrls: ['./step-personal-details.component.css']
})

export class StepPersonalDetailsComponent implements OnInit {

  // @ts-ignore
  personalDetails: FormGroup

  submitted: boolean = false

  MaritalStatus: string[] = ['Single', 'Married', 'Divorced', 'Widowed']
  category: string[] = ['ST/SC', 'OBC', 'General']
  disabilities: string[] = ['vision Impairment', 'deaf or hard of hearing','mental health conditions', 'intellectual disability', 'acquired brain injury', 'autism spectrum disorder' ,'physical disability']


  constructor(private formBuilder: FormBuilder, private traineePersonalDetailsService: TraineePersonalDetailsService) { }

  ngOnInit(): void {
    this.getPersonalDetails()
    this.personalDetails = this.formBuilder.group({
      TraineeId: ['1', [Validators.required, Validators.pattern('[0-9]+')]],
      EmailId: ['', [Validators.required, Validators.email]],
      Aadhaar: ['', [Validators.required, Validators.pattern('[0-9]{12}')]],
      Pan: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{10}')]],
      MaritalStatus: ['', [Validators.required]],
      Religion: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Category: ['', [Validators.required]],
      PersonWithDisability: [''],
      DisabilityType: ['']
    })
  }

  getPersonalDetails(): void {
    this.traineePersonalDetailsService.getPersonalDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  savePersonalDetails(): void {
    this.submitted = true
    console.log(this.personalDetails)
    if(this.personalDetails.value.PersonWithDisability == "")
      this.personalDetails.value.PersonWithDisability = false
    console.log(this.personalDetails.value)

    this.traineePersonalDetailsService.postPersonalDetails(this.personalDetails.value).subscribe((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

}
