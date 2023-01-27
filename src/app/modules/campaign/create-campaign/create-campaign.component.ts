
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, Validators } from "@angular/forms";
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  form!: FormGroup;

  sheetid  : string="dhicvbqhs";

  campaignname: string="scbhWS";

  templatname : string="SCHBSC";

  posterurl: string="jhvsjhcv";

  uploadFile! : File;

  message: any;

  myControl = new FormControl("");

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private http:HttpClient
  ) {

  }
  ngOnInit(): void {
    // this.form.template_name='';
    this.form = this.fb.group({
      sheet_id: [""],
      campaign_name: ["", ],
      template_name: ["", ],
      lang: ["", ],
      poster_url: ["", ],
    });
  }


  
  //   onSubmit() {
  //     // this.http.post("http://localhost:6000/bot/form/",this.form.value).subscribe();

  //     // this.apiService.boto(this.form.value);
  //     //  console.log(this.form.value)
  //     //  this.form.reset();
  //     //  this.message ="Campaign Started";
  //     console.log(this.form);
  //     if (
  //       this.uploadFile ||
  //       !this.uploadFile == null ||
  //       !this.uploadFile == undefined
  //     ) {
  //       // const formData: FormData = new FormData();
  //       // formData.append("template_name", this.form.data.template_name);
  //       // formData.append("sellerid", this.sellerid);
  //     }


  //   }


  // get sheet_id(): any {
  //   return this.form.get('sheet_id');
  // }
  // get template_name(): any {
  //   return this.form.get('rollno');
  // }
  // get lang(): any {
  //   return this.form.get('lang');
  // }

  // get fileType(): any {
  //   return this.form.get('fileType');
  // }

  // get campaignName(): any {
  //   return this.form.get('campaign_name');
  // }
  
  // get posterUrl(): any {
  //   return this.form.get('postrl');
  // }

  onFileChange(event: any) {

    const file = event?.target.files[0];
    this.uploadFile = file;
  }




  onSubmit() {
    var formData= new FormData();
    formData.append("sheetid", this.form.value.sheet_id);
    formData.append("campaignname", this.form.value.campaign_name);
    formData.append("templatname", this.form.value.template_name);
    formData.append("posterurl", this.form.value.poster_url);
    formData.append("uploadFile", this.uploadFile);
    this.http.post("http://localhost:6000/bot/form/",formData).subscribe();

    //wruovhqierbvqi
    // console.log("dvqev",formData.get(""));
    
    // (formData.forEach((r)=>console.log(r)));

    // this.apiService.boto(formData).subscribe();

  }
}

