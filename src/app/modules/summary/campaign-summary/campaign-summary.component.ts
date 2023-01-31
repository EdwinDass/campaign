import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campaign-summary',
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})



export class CampaignSummaryComponent implements OnInit, AfterViewInit {
  ngOnInit(): void { }

  dataSource = yeah;// need to change datasource after getting an proper api

  displayedColumns: string[] = [
    "name",
    "id",
    "url",
    "count",
    "date",
    "status"

  ];

  constructor(private router:Router){ }



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() { }

  openLink(){
    this.router.navigate(["create"])
  }
}


//dummy things, wanna delete after getting dataSource.......

export interface History {
  name?: string;
  id?: number
}

const yeah: History[] = [{
  name: "edwin",
  id: 2
}]