import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './modules/campaign/create-campaign/create-campaign.component';
import { HomeViewComponent } from './modules/home/home-view/home-view.component';
import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { CampaignSummaryComponent } from './modules/summary/campaign-summary/campaign-summary.component';

// import { NoAuthGuard } from "./core/guards/no-auth/no-auth.guard";
// import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  // { path: '**', redirectTo: "/login"},
  { path: "login",component:LoginPageComponent},
  { path: "home", component: HomeViewComponent},
  { path: "create", component: CreateCampaignComponent},
  { path: "summary", component: CampaignSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
