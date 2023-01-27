import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../campaign/service/api/api.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent {

  form=new FormGroup({ template_name: new FormControl(),campaign_name: new FormControl(), sheet_id: new FormControl(),  lang: new FormControl(),poster_url:new FormControl(),fileType:new FormControl()});
  
  message: any;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    ){

}
  ngOnInit(): void {
    //this.form.template_name='';
   
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
  // this.http.post("http://localhost:6000/bot/form/",this.form.value).subscribe();

this.apiService.boto(this.form.value);
 console.log(this.form.value)
 this.form.reset();
 this.message ="Campaign Started";
}

}
