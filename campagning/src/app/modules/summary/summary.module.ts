import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { CampaignSummaryComponent } from './campaign-summary/campaign-summary.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CampaignSummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    CoreModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],

})
export class SummaryModule { }
