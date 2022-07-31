import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngo-organization-details',
  templateUrl: './ngo-organization-details.component.html',
  styleUrls: ['./ngo-organization-details.component.css']
})
export class NgoOrganizationDetailsComponent implements OnInit {

  // @ts-ignore
  organizationDetails: FormGroup

  MaritalStatus: string[] = ['Single', 'Married', 'Divorced', 'Widowed']
  category: string[] = ['ST/SC', 'OBC', 'General']
  disabilities: string[] = ['vision Impairment', 'deaf or hard of hearing','mental health conditions', 'intellectual disability', 'acquired brain injury', 'autism spectrum disorder' ,'physical disability']


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getOrganizationDetails()
    this.organizationDetails = this.formBuilder.group({
      NgoId: ['1', [Validators.required]],
      OrganizationName: ['', [Validators.required]],
      ChairmanName: ['', [Validators.required]],
      Pan: ['', [Validators.required]],
      SecretaryName: ['', [Validators.required]],
      Website: ['', [Validators.required]]
    })
  }

  getOrganizationDetails(): void {
  }

  saveOrganizationDetails(): void {
    console.log(this.organizationDetails.value)
  }

}
