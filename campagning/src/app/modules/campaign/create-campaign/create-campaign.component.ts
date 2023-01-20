
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from "@angular/forms";
import { ApiService } from '../service/api/api.service'; 

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  form=new FormGroup({ template_name: new FormControl(),campaign_name: new FormControl(), sheet_id: new FormControl(),  lang: new FormControl(),poster_url:new FormControl(),fileType:new FormControl()});

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    ){

}
  ngOnInit(): void {
   
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

get campaignName(): any {
  return this.form.get('campaign_name');
}


get posterUrl(): any {
  return this.form.get('poster_url');
}
onSubmit(){
  // this.http.post("http://localhost:6000/bot/form/:id",this.form.value).subscribe();

// this.apiService.boto(this.form.value);
 console.log(this.form.value)
}
}
