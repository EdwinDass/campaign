import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';


const routes: Routes = [
  {path:"",redirectTo:'/login', pathMatch:'full'},
  {path:"create",component:CreateCampaignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
