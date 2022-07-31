import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngo-contact-details',
  templateUrl: './ngo-contact-details.component.html',
  styleUrls: ['./ngo-contact-details.component.css']
})
export class NgoContactDetailsComponent implements OnInit {

  // @ts-ignore
  contactDetails: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getContactDetails()
    this.contactDetails = this.formBuilder.group({
      NgoId: ['1', [Validators.required]],
      State:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      City:['', [Validators.required]],
      District:['', [Validators.required]],
      Pincode:['', [Validators.required]],
      Address:['', [Validators.required]],
      ContactNo: ['', [Validators.required]]
    })
  }

  getContactDetails(): void {

  }

  saveContactDetails(): void {
    // console.log(this.addressDetails.value)
  }
}
