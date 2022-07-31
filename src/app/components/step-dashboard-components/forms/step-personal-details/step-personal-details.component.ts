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

  MaritalStatus: string[] = ['Single', 'Married', 'Divorced', 'Widowed']
  category: string[] = ['ST/SC', 'OBC', 'General']
  disabilities: string[] = ['vision Impairment', 'deaf or hard of hearing','mental health conditions', 'intellectual disability', 'acquired brain injury', 'autism spectrum disorder' ,'physical disability']


  constructor(private formBuilder: FormBuilder, private traineePersonalDetailsService: TraineePersonalDetailsService) { }

  ngOnInit(): void {
    this.getPersonalDetails()
    this.personalDetails = this.formBuilder.group({
      TraineeId: ['1', [Validators.required]],
      EmailId: ['', [Validators.required, Validators.email]],
      Aadhaar: ['', [Validators.required]],
      Pan: ['', [Validators.required]],
      MaritalStatus: ['', [Validators.required]],
      Religion: ['', [Validators.required]],
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
    if(this.personalDetails.value.PersonWithDisability == "")
      this.personalDetails.value.PersonWithDisability = false
    console.log(this.personalDetails.value)

    this.traineePersonalDetailsService.postPersonalDetails(this.personalDetails.value).subscribe((d) => {
      console.log(d)
    })
  }

}
