import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CreateCampaignComponent } from './modules/campaign/create-campaign/create-campaign.component';
import { HomeViewComponent } from './modules/home/home-view/home-view.component';
import { CampaignSummaryComponent } from './modules/summary/campaign-summary/campaign-summary.component';

import { NoAuthGuard } from "./core/guards/no-auth/no-auth.guard";
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: "", component: LoginPageComponent, canActivate: [NoAuthGuard] },
  // { path: '**', redirectTo: "/login"},
  { path: "login",component:LoginPageComponent, canActivate: [NoAuthGuard]},
  { path: "home", component: HomeViewComponent, canActivate: [AuthGuard] },
  { path: "create", component: CreateCampaignComponent, canActivate: [AuthGuard] },
  { path: "summary", component: CampaignSummaryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
