import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
 

@Component({
  selector: 'app-campaign-summary',
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})



export class CampaignSummaryComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {}

  dataSource = yeah;

  displayedColumns:string[]=[
    "name",
    "id",
    "url",
    "count",
    "date",
    "status"
    
];



@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {}
}

export interface History {
  name?: string;
  id?: number
}

const yeah:History[]=[{
  name:"edwin",
  id:2
}]