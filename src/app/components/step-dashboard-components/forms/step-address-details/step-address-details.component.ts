import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraineeAddressDetailsService } from 'src/app/services/trainee-details/trainee-address-details.service';

@Component({
  selector: 'app-step-address-details',
  templateUrl: './step-address-details.component.html',
  styleUrls: ['./step-address-details.component.css']
})
export class StepAddressDetailsComponent implements OnInit {

  // @ts-ignore
  addressDetails: FormGroup

  constructor(private formBuilder: FormBuilder, private traineeAddressDetailsService: TraineeAddressDetailsService) { }

  ngOnInit(): void {
    this.getAddressDetails()
    this.addressDetails = this.formBuilder.group({
      TraineeId: ['1', [Validators.required]],
      State:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      City:['', [Validators.required]],
      District:['', [Validators.required]],
      Pincode:['', [Validators.required]],
      Address:['', [Validators.required]]
    })
  }

  getAddressDetails(): void {
    this.traineeAddressDetailsService.getAddressDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveAddressDetails(): void {
    console.log(this.addressDetails.value)

    this.traineeAddressDetailsService.postAddressDetails(this.addressDetails.value).subscribe((d) => {
      console.log(d)
    })
  }
}
