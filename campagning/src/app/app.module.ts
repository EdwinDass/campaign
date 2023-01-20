import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CoreModule } from "../app/core/core.module" ;
import { CampaignModule } from './modules/campaign/campaign.module';
import { HomeModule } from './modules/home/home.module';
import { SummaryModule } from './modules/summary/summary.module';
import { MatTableModule } from "@angular/material/table"

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CoreModule,
    CampaignModule,
    HomeModule,
    SummaryModule,
    MatTableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
