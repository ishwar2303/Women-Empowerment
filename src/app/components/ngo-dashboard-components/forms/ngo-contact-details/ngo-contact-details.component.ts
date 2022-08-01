import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgoContactDetailsService } from 'src/app/services/ngo-details/ngo-contact-details.service';

@Component({
  selector: 'app-ngo-contact-details',
  templateUrl: './ngo-contact-details.component.html',
  styleUrls: ['./ngo-contact-details.component.css']
})
export class NgoContactDetailsComponent implements OnInit {

  // @ts-ignore
  contactDetails: FormGroup
  errorMessage:string=''
  successMessage: string = ''
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private ngoContactDetailsService: NgoContactDetailsService) { }

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
    this.ngoContactDetailsService.getContactDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveContactDetails(): void {
    this.submitted=true;
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.contactDetails.value)
    if(this.contactDetails.invalid)
      return
    this.ngoContactDetailsService.postContactDetails(this.contactDetails.value).subscribe((res) => {
      this.successMessage=res.success;
      this.contactDetails.reset()
    }, (err) => {
      this.errorMessage=err.error
    })
  }
}
