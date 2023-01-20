import { Component } from '@angular/core';

import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {

  form=new FormGroup({ template_name: new FormControl(), sheet_id: new FormControl(),  lang: new FormControl(),fileType:new FormControl()});

  constructor(private fb: FormBuilder,){

  }
  
    get sheet_id(): any {
    return this.form.get('sheet_id');
  }
    get template_name(): any {
    return this.form.get('rollno');
  }
  get lang(): any {
    return this.form.get('lang');
  }
  
  get fileType(): any {
    return this.form.get('fileType');
  }
  onSubmit(){
    console.log(this.form.value)
  }
}
