import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignSummaryComponent } from './campaign-summary/campaign-summary.component';

const routes: Routes = [
  {path:"summary",component:CampaignSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
