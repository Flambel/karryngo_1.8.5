import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Package } from '../../../../../shared/entity/package';
import { PackageService } from '../../../../../shared/service/back-office/package.service';

declare var $: any;

@Component({
  selector: 'app-post-request-colis0',
  templateUrl: './post-request-colis0.component.html',
  styleUrls: ['./post-request-colis0.component.scss']
})
export class PostRequestColis0Component implements OnInit {

  submitted: boolean;
  packageForm: FormGroup;
  owner: string = 'Flambel SANOU';
  status: string = 'Draft';
  title = 'New package request ';
  titleUser: string;
  user1 = true;
  user2 = false;
  user3 = false;
  visible = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private packageService:PackageService) { }

  ngOnInit(): void {
    this.packageForm = this.formBuilder.group({
      'field_owner': [this.owner, ],
      'field_status': [this.status, ],
      'field_name': ['', Validators.required],
      'field_price': ['', Validators.required],
      'field_countryStart': ['', Validators.required],
      'field_cityStart': ['', Validators.required],
      'field_countryArrived': ['', Validators.required],
      'field_cityArrived': ['', Validators.required],
      'field_isWeak': ['', Validators.required],
      'field_isUrgent': ['', Validators.required],
      'field_delayDate': ['', Validators.required],
      'field_recipientName': ['', Validators.required],
      'field_recipientContact': ['', Validators.required],
      'field_typePartSupply': ['', Validators.required],
      'field_typeof': ['', Validators.required],
      'field_numberPackage': ['', Validators.required],
      'field_vehicleType': ['', ],
      'field_heightPackages': ['', ],
      'field_widhtPackage': ['', ],
      'field_weightPackage': ['', ],
      'field_lengthPackage': ['', ],
      'field_descriptionPackage': ['', ]
    });

  }


  get f() {
    return this.packageForm.controls;
  }

  submit()
  {
    //console.log(this.packageForm.value);
    //if(this.packageForm.invalid) return;
    this.submitted=true;
    this.packageService.packageCreation(Package.hydrate(this.packageForm.value))
    .then((result:any)=>{
      this.submitted=false;
      this.showNotification('top','center', 'success', 'pe-7s-close-circle', '\<b>Success\</b>\<br>Service was created successfully')
      setTimeout(() => {
        this.router.navigate(['/post-requests/packages/list-providers'])
      }, 1000);
    })
    .catch((error)=>{
      console.log(error)
      this.showNotification('top','center', 'danger', 'pe-7s-close-circle', '\<b>Sorry\</b>\<br>'+error.message)
      this.submitted=false;
    })

  }
  showNotification(from, align, colortype, icon, text) {

    $.notify({
      icon: icon,
      message: text
    }, {
      type: colortype,
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    /*PackageService.currentPackage.field_owner = this.packageForm.controls.field_owner?.value;
    PackageService.currentPackage.field_price = this.packageForm.controls.field_price?.value;
    PackageService.currentPackage.field_name = this.packageForm.controls.field_name?.value;
    PackageService.currentPackage.field_countryStart = this.packageForm.controls.field_countryStart?.value;
    PackageService.currentPackage.field_cityStart = this.packageForm.controls.field_cityStart?.value;
    PackageService.currentPackage.field_latStart = this.packageForm.controls.field_latStart?.value;
    PackageService.currentPackage.field_longStart = this.packageForm.controls.field_longStart?.value;
    PackageService.currentPackage.field_countryArrived = this.packageForm.controls.field_countryArrived?.value;
    PackageService.currentPackage.field_cityArrived = this.packageForm.controls.field_cityArrived?.value;
    PackageService.currentPackage.field_latArrived = this.packageForm.controls.field_latArrived?.value;
    PackageService.currentPackage.field_longArrived = this.packageForm.controls.field_longArrived?.value;
    PackageService.currentPackage.field_isWeak = this.packageForm.controls.field_isWeak?.value;
    PackageService.currentPackage.field_isUrgent = this.packageForm.controls.field_isUrgent?.value;
    PackageService.currentPackage.field_delayDate = this.packageForm.controls.field_delayDate?.value;
    PackageService.currentPackage.field_recipientName = this.packageForm.controls.field_recipientName?.value;
    PackageService.currentPackage.field_recipientContact = this.packageForm.controls.field_recipientContact?.value;
    PackageService.currentPackage.field_typePartSupply = this.packageForm.controls.field_typePartSupply?.value;
    PackageService.currentPackage.field_typeof = this.packageForm.controls.field_typeof?.value;
    PackageService.currentPackage.field_vehicleType = this.packageForm.controls.field_vehicleType?.value;
    PackageService.currentPackage.field_heightPackages = this.packageForm.controls.field_heightPackages?.value;
    PackageService.currentPackage.field_widhtPackage = this.packageForm.controls.field_widhtPackage?.value;
    PackageService.currentPackage.field_weightPackage = this.packageForm.controls.field_weightPackage?.value;
    PackageService.currentPackage.field_lengthPackage = this.packageForm.controls.field_lengthPackage?.value;
    PackageService.currentPackage.field_numberPackage = this.packageForm.controls.field_numberPackage?.value;
    PackageService.currentPackage.field_image = this.packageForm.controls.field_image?.value;
    PackageService.currentPackage.field_descriptionPackage = this.packageForm.controls.field_descriptionPackage?.value;
    */
    // console.log(PackageService.currentPackage);
  }

}
