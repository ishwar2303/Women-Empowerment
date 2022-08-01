import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgoOrganizationDetailsService } from 'src/app/services/ngo-details/ngo-organization-details.service';

@Component({
  selector: 'app-ngo-organization-details',
  templateUrl: './ngo-organization-details.component.html',
  styleUrls: ['./ngo-organization-details.component.css']
})
export class NgoOrganizationDetailsComponent implements OnInit {

  // @ts-ignore
  organizationDetails: FormGroup
  errorMessage: string = ''
  successMessage: string = ''
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private ngoOrganizationDetailsService: NgoOrganizationDetailsService) { }

  ngOnInit(): void {
    this.getOrganizationDetails()
    this.organizationDetails = this.formBuilder.group({
      NgoId: ['1', [Validators.required]],
      OrganizationName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      ChairmanName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Pan: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{10}')]],
      SecretaryName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Website: ['', [Validators.required, Validators.pattern('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)')]]
    })
  }

  getOrganizationDetails(): void {
    this.ngoOrganizationDetailsService.getOrganizationDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveOrganizationDetails(): void {
    this.submitted = true;
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.organizationDetails.value)
    if (this.organizationDetails.invalid)
      return
    this.ngoOrganizationDetailsService.postOrganizationDetails(this.organizationDetails.value).subscribe((res) => {
      this.successMessage = res.success;
      this.organizationDetails.reset()
    }, (err) => {
      this.errorMessage = err.error
    })
  }

}
