import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, Validators } from "@angular/forms";
// import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  form!: FormGroup;

  sheetname!  : String;

  campaignname!: string;

  templatname! : string;

  posterurl!: string;

  uploadFile! : File;

  message: any;

  myControl = new FormControl("");

  constructor(
    private fb: FormBuilder,
    private http:HttpClient
  ) {

  }
  ngOnInit(): void {
    // this.form.template_name='';
    this.form = this.fb.group({
      sheet_name: ["",[Validators.pattern, Validators.required]],
      campaign_name: ["", [Validators.pattern, Validators.required]],
      template_name: ["",[Validators.pattern, Validators.required] ],
      lang: ["",[Validators.pattern, Validators.required] ],
      poster_url: ["",[Validators.pattern, Validators.required] ],
    });
  }
 
   ps(){

  }

  onFileChange(event: any) {

    const file = event?.target.files[0];
    this.uploadFile = file;
  }

  onSubmit() {
    if(this.form.value.sheet_id==""||this.form.value.campaign_name==""||  this.form.value.template_name=="" ||this.form.value.lang=="" ||this.form.value.poster_url=="" || this.uploadFile==undefined){
      alert("please Fill all the details")
    }else{
    var formData: FormData= new FormData();
    formData.append("sheetname", this.form.value.sheet_name);
    formData.append("campaignname", this.form.value.campaign_name);
    formData.append("templatname", this.form.value.template_name);
    formData.append("language", this.form.value.lang);
    formData.append("posterurl", this.form.value.poster_url);
    formData.append("myFile", this.uploadFile);
    this.http.post("http://localhost:6001/bot/trigger",formData).subscribe();
    console.log("hweuighuqe",this.form.value.sheet_name);
    alert("Campaign Started!")
    this.form.reset();
    }
}

}