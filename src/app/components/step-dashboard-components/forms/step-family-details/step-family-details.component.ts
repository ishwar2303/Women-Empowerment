import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraineeFamilyDetailsService } from 'src/app/services/trainee-details/trainee-family-details.service';

@Component({
  selector: 'app-step-family-details',
  templateUrl: './step-family-details.component.html',
  styleUrls: ['./step-family-details.component.css']
})
export class StepFamilyDetailsComponent implements OnInit {

  // @ts-ignore
  familyDetails: FormGroup

  constructor(private formBuilder: FormBuilder, private traineeFamilyDetailsService: TraineeFamilyDetailsService) { }

  ngOnInit(): void {
    this.getFamilyDetails()
    this.familyDetails = this.formBuilder.group({
      TraineeId: ['1', [Validators.required]],
      MotherName:['', [Validators.required]],
      MotherDesignation:['', [Validators.required]],
      FatherName:['', [Validators.required]],
      FatherDesignation:['', [Validators.required]],
      HusbandName:[''],
      NumberOfChildren:['']
    })
  }


  getFamilyDetails(): void {
    this.traineeFamilyDetailsService.getFamilyDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveFamilyDetails(): void {
    console.log(this.familyDetails.value)

    this.traineeFamilyDetailsService.postFamilyDetails(this.familyDetails.value).subscribe((d) => {
      console.log(d)
    })
  }

}
